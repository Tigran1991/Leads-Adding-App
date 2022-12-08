import { Filter } from "./FilterComponents/Filter"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItemComponents/ListItem"
import * as Styled from "./styled"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkFilterState } from "../redux/features/filterSelectedStateReducerSlice"
import { filterByFilterInput } from "../utils"

const MIN_LENGTH_FOR_FILTERING = 3

export const List = () => {
  const dispatch = useDispatch()
  const {
    data: leads,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadsQuery()

  const [filterInputValue, setFilterInputValue] = useState("")
  const [listDisplayState, setListDisplayState] = useState("off")
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

  const checkFilteringType = () => {
    if (selectedState === "Selected") {
      return filterByFilterInput(updatedLeadsData, filterInputValue)
    } else {
      return updatedLeadsData.filter((lead) => lead.selected === true)
    }
  }

  useEffect(() => {
    dispatch(checkFilterState(listDisplayState))
    setListState(false)
    if (
      filterInputValue.length >= MIN_LENGTH_FOR_FILTERING &&
      listDisplayState === "on"
    ) {
      const listData = checkFilteringType()
      setUpdatedListData(listData)
    } else if (
      filterInputValue.length >= MIN_LENGTH_FOR_FILTERING &&
      listDisplayState === "off"
    ) {
      const listData = filterByFilterInput(leads, filterInputValue)
      setUpdatedListData(listData)
    } else if (!filterInputValue.length && listDisplayState === "on") {
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
    selectedState,
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
