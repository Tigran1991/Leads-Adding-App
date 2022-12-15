import { memo } from "react"
import { useSelector } from "react-redux"
import * as Styled from "./styled"

export const FilterState = memo(() => {
  const selectedState = useSelector(
    (state) => state.filterSelectedState.filterState
  )
  return (
    <Styled.SelectedState>
      <span>{selectedState}</span>
    </Styled.SelectedState>
  )
})
