import { Filter } from "./FilterComponents/Filter"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItemComponents/ListItem"
import * as Styled from "./styled"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkFilterState } from "../redux/features/filterSelectedStateReducerSlice"
import { filterByFilterInput } from "../utils"

export const List = () => {
  const dispatch = useDispatch()
  const {
    data: leads,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadsQuery()

  const [filterInputValue, setFilterInputValue] = useState("") // filters current value
  const [listDisplayState, setListDisplayState] = useState("off") // lead list display state by based on filter switcher
  const [listState, setListState] = useState(true)
  const [updatedLeadsData, setUpdatedListData] = useState([])

  const selectedState = useSelector(
    (state) => state.filterSelectedState.filterState
  )

  useEffect(() => {
    if (isSuccess) {
      setUpdatedListData(leads)
    }
  }, [leads, isSuccess])

  const getFilterInputValue = (value) => {
    setFilterInputValue(value)
  }

  const getListDisplayState = (value) => {
    if (listDisplayState === "on") {
      setListDisplayState("off")
    } else {
      setListDisplayState(value)
    }
  }

  console.log(updatedLeadsData)

  useEffect(() => {
    dispatch(checkFilterState(listDisplayState))
    if (filterInputValue.length >= 3 && listDisplayState === "on") {
      setListState(false)
      const listData =
        selectedState === "Selected"
          ? filterByFilterInput(updatedLeadsData, filterInputValue)
          : updatedLeadsData.filter((lead) => lead.selected === true)
      setUpdatedListData(listData)
    } else if (filterInputValue.length >= 3 && listDisplayState === "off") {
      setListState(false)
      const listData = filterByFilterInput(leads, filterInputValue)
      setUpdatedListData(listData)
    } else if (!filterInputValue.length && listDisplayState === "on") {
      setListState(false)
      const listData = leads.filter((lead) => lead.selected === true)
      setUpdatedListData(listData)
    } else if (!filterInputValue.length && listDisplayState === "off") {
      setListState(true)
    }
  }, [
    leads,
    listDisplayState,
    filterInputValue,
    filterInputValue.length,
    dispatch,
  ])

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
        onChangeFilteredLeads={getFilterInputValue}
        onChangeListDisplayState={getListDisplayState}
      />
      {content}
    </Styled.ListWrapper>
  )
}
