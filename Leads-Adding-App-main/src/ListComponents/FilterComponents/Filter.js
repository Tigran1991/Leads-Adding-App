import { FilterLeads } from "./FilterLeads"
import { FilterSwitch } from "./FilterSwitch"
import { FilterState } from "./FilterState"
import * as Styled from "./styled"
import { memo } from "react"

export const Filter = memo(() => {
  return (
    <Styled.FilterWrapper>
      <FilterLeads />
      <FilterSwitch />
      <FilterState />
    </Styled.FilterWrapper>
  )
})
