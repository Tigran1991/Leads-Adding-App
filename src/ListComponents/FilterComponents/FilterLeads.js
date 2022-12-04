import { useState } from "react"
import { useDispatch } from "react-redux"
import { useGetLeadsQuery } from "../../redux/app/api/apiSlice"
import * as Styled from "./styled"

export const FilterLeads = ({ onChange }) => {
  const filterLeads = (e) => {
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
