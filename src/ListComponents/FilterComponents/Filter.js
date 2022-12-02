import { FilterLeads } from "./FilterLeads"
import { FilterSwitch } from "./FilterSwitch"
import { FilterState } from "./FilterState"
import * as Styled from "./styled"

export const Filter = ({ onChange }) => {
  const change = (value) => {
    onChange(value)
  }

  return (
    <Styled.FilterWrapper>
      <FilterLeads onChange={change} />
      <FilterSwitch />
      <FilterState />
    </Styled.FilterWrapper>
  )
}
