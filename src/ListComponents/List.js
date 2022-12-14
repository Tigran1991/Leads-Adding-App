import { Filter } from "./FilterComponents/Filter"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItemComponents/ListItem"
import * as Styled from "./styled"
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByFilterInput, MIN_LENGTH } from "../utils"
import { updateLeadsData } from "../redux/features/updatedListDataReducerSlice"

export const List = () => {
  const dispatch = useDispatch()
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

  useEffect(() => {
    if (isSuccess) {
      dispatch(updateLeadsData(leads))
    }
  }, [leads, isSuccess, dispatch])

  const checkFilteringType = useCallback(() => {
    const list = leads.filter((lead) => lead.selected === true)
    if (filterState === "Selected") {
      return filterByFilterInput(list, filterValue)
    } else {
      return list.filter((lead) => lead.selected === true)
    }
  }, [leads, filterValue, filterState])

  const filterValueLength = filterValue.length
  const filtering = filterState === "Selected" ? true : false

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (filterValueLength < MIN_LENGTH && !filtering) {
    content = leads.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (filterValueLength >= MIN_LENGTH && filtering) {
    const listData = checkFilteringType()
    content = listData.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (filterValueLength >= MIN_LENGTH && !filtering) {
    const listData = filterByFilterInput(leads, filterValue)
    content = listData.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (filterValueLength <= MIN_LENGTH && filtering) {
    const listData = leads.filter((lead) => lead.selected === true)
    content = listData.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <Styled.ListWrapper>
      <Filter />
      {content}
    </Styled.ListWrapper>
  )
}
