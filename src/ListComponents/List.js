import { Filter } from "./FilterComponents/Filter"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItemComponents/ListItem"
import * as Styled from "./styled"
import { useEffect, useState } from "react"

export const List = () => {
  const {
    data: leads,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadsQuery()

  const [filteredLeads, setFilteredLeads] = useState("")
  const [listDisplayState, setListDisplayState] = useState("off")

  const [listState, setListState] = useState(true)
  const [updatedLeadsData, setUpdatedListData] = useState([])

  useEffect(() => {
    if (isSuccess) {
      setUpdatedListData(leads)
    }
  }, [isSuccess])

  const getFilteredLeads = (value) => {
    setFilteredLeads(value)
  }

  const getListDisplayState = (value) => {
    if (listDisplayState === "on") {
      setListDisplayState("off")
    } else {
      setListDisplayState(value)
    }
  }

  useEffect(() => {
    if (filteredLeads.length >= 3) {
      setListState(false)
      const data = updatedLeadsData.filter((lead) => {
        for (const key in lead) {
          if (Object.hasOwnProperty.call(lead, key)) {
            const element = lead[key]
            if (
              typeof element === "string" &&
              element.includes(filteredLeads)
            ) {
              return lead
            }
          }
        }
      })
      setUpdatedListData(data)
    } else if (filteredLeads === "") {
      setListState(true)
    }
  }, [filteredLeads])

  useEffect(() => {
    if (listDisplayState === "on") {
      setListState(false)
      const data = updatedLeadsData.filter((lead) => lead.selected === true)
      setUpdatedListData(data)
    } else {
      setListState(true)
    }
  }, [listDisplayState])

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess && listState) {
    content = leads.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (isSuccess && !listState) {
    content = updatedLeadsData.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <Styled.ListWrapper>
      <Filter
        onChangeFilteredLeads={getFilteredLeads}
        onChangeListDisplayState={getListDisplayState}
      />
      {content}
    </Styled.ListWrapper>
  )
}
