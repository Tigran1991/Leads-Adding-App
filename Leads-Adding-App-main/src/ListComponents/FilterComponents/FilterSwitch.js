import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { checkFilterState } from "../../redux/features/filterStateReducerSlice"
import * as Styled from "./styled"

export const FilterSwitch = memo(() => {
  const dispatch = useDispatch()

  const filterState = useSelector(
    (state) => state.filterSelectedState.filterState
  )
  const handleDisplayState = () => {
    if (filterState === "All") {
      dispatch(checkFilterState("Selected"))
    } else {
      dispatch(checkFilterState("All"))
    }
  }

  return (
    <>
      <Styled.Switch>
        <Styled.Checkbox type="checkbox" onChange={handleDisplayState} />
        <Styled.SliderRound />
      </Styled.Switch>
    </>
  )
})
