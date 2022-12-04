import { FilterLeads } from "./FilterLeads"
import { FilterSwitch } from "./FilterSwitch"
import { FilterState } from "./FilterState"
import * as Styled from "./styled"

export const Filter = ({ onChangeFilteredLeads, onChangeListDisplayState }) => {
  const filterLeads = (value) => {
    onChangeFilteredLeads(value)
  }

  const displayState = (value) => {
    onChangeListDisplayState(value)
  }

  return (
    <Styled.FilterWrapper>
      <FilterLeads onChangeFilteredLeads={filterLeads} />
      <FilterSwitch onChangeListDisplayState={displayState} />
      <FilterState />
    </Styled.FilterWrapper>
  )
}
