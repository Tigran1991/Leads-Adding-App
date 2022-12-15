import { Filter } from "./FilterComponents/Filter"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItemComponents/ListItem"
import * as Styled from "./styled"
import { memo } from "react"
import { useSelector } from "react-redux"
import { filterByFilterInput, MIN_LENGTH } from "../utils"

export const List = memo(() => {
  const {
    data: leads,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadsQuery()

  const filterValue = useSelector((state) => state.filterValue.value)

  const filterState = useSelector(
    (state) => state.filterSelectedState.filterState
  )

  const filterValueLength = filterValue.length
  const filtering = filterState === "Selected" ? true : false

  const todo = (todo1) => {
    return <ListItem listItemdata={todo1} key={todo1.id} />
  }

  const todo2 = () => {
    if (filterValueLength < MIN_LENGTH && !filtering) {
      content = leads.map((lead) => {
        return todo(lead)
      })
    } else if (filterValueLength >= MIN_LENGTH && filtering) {
      const filteredList = leads.filter((lead) => lead.selected === true)
      const contentData = filterByFilterInput(filteredList, filterValue)
      content = contentData.map((lead) => {
        return todo(lead)
      })
    } else if (filterValueLength >= MIN_LENGTH && !filtering) {
      const contentData = filterByFilterInput(leads, filterValue)
      content = contentData.map((lead) => {
        return todo(lead)
      })
    } else if (filterValueLength <= MIN_LENGTH && filtering) {
      const filteredList = leads.filter((lead) => lead.selected === true)
      content = filteredList.map((lead) => {
        return todo(lead)
      })
    }
  }

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    todo2()
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <Styled.ListWrapper>
      <Filter />
      {content}
    </Styled.ListWrapper>
  )
})
