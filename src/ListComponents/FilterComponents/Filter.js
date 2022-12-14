import { FilterLeads } from "./FilterLeads"
import { FilterSwitch } from "./FilterSwitch"
import { FilterState } from "./FilterState"
import * as Styled from "./styled"

export const Filter = () => {
  return (
    <Styled.FilterWrapper>
      <FilterLeads />
      <FilterSwitch />
      <FilterState />
    </Styled.FilterWrapper>
  )
}
