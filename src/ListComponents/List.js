import { Filter } from "./FilterComponents/Filter"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItemComponents/ListItem"
import * as Styled from "./styled"
// import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

export const List = () => {
  // const listState = useSelector((state) => state.listState.list)
  const {
    data: leads,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadsQuery()
  const [filterState, setFilterState] = useState("")
  const [listState, setListState] = useState(true)
  const [todo, setTodo] = useState([])

  const change = (value) => {
    setFilterState(value)
  }

  useEffect(() => {
    if (filterState.length >= 3) {
      setListState(false)
      const data = leads.filter((lead) => {
        for (const key in lead) {
          if (Object.hasOwnProperty.call(lead, key)) {
            const element = lead[key]
            if (typeof element === "string" && element.includes(filterState)) {
              return lead
            }
          }
        }
      })
      setTodo(data)
    } else {
      setListState(true)
    }
  }, [leads, filterState])

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess && listState) {
    content = leads.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (isSuccess && !listState) {
    content = todo.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <Styled.ListWrapper>
      <Filter onChange={change} />
      {content}
    </Styled.ListWrapper>
  )
}
