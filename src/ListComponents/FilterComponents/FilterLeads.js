import { memo, useState } from "react"
import { useDispatch } from "react-redux"
import { useGetLeadsQuery } from "../../redux/app/api/apiSlice"
import { updateFilterValue } from "../../redux/features/filterValueReducerSlice"
import * as Styled from "./styled"

export const FilterLeads = memo(() => {
  const dispatch = useDispatch()
  const filterLeads = (e) => {
    dispatch(updateFilterValue(e.target.value))
  }

  return (
    <Styled.FilterFieldWrapper>
      <Styled.FilterField
        type="text"
        placeholder="Filter Leads"
        onChange={filterLeads}
      ></Styled.FilterField>
      <Styled.SearchIcon />
    </Styled.FilterFieldWrapper>
  )
})
