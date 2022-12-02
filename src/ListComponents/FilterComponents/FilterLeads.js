import { useState } from "react"
import { useDispatch } from "react-redux"
import { useGetLeadsQuery } from "../../redux/app/api/apiSlice"
import { checkListState } from "../../redux/features/listStateReducerSlice"
import * as Styled from "./styled"

export const FilterLeads = ({ onChange }) => {
  const dispatch = useDispatch()
  const filterLeads = (e) => {
    dispatch(checkListState(false))
    onChange(e.target.value)
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
}
