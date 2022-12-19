import { Filter } from "./FilterComponents/Filter"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItemComponents/ListItem"
import * as Styled from "./styled"
import { memo } from "react"
import { useSelector } from "react-redux"
import { filteringByFilterInput, filterListStat, MIN_LENGTH } from "../utils"

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

  const makingListItem = (listItem) => {
    return <ListItem listItemdata={listItem} key={listItem.id} />
  }

  const filteringLeads = () => {
    if (filterValueLength < MIN_LENGTH && !filtering) {
      content = leads.map((lead) => {
        return makingListItem(lead)
      })
    } else if (filterValueLength >= MIN_LENGTH && filtering) {
      const filteredList = filterListStat(leads)
      const contentData = filteringByFilterInput(filteredList, filterValue)
      content = contentData.map((lead) => {
        return makingListItem(lead)
      })
    } else if (filterValueLength >= MIN_LENGTH && !filtering) {
      const contentData = filteringByFilterInput(leads, filterValue)
      content = contentData.map((lead) => {
        return makingListItem(lead)
      })
    } else if (filterValueLength <= MIN_LENGTH && filtering) {
      const filteredList = filterListStat(leads)
      content = filteredList.map((lead) => {
        return makingListItem(lead)
      })
    }
  }

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    filteringLeads()
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
