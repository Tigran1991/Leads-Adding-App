import { useDispatch } from "react-redux"
import { checkClearButtonState } from "../../redux/features/clearButtonStateReducerSlice"
import * as Styled from "../styled"

export const ClearButton = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(checkClearButtonState(true))
  }

  return (
    <Styled.ClearButtonElement type="button" onClick={handleClick}>
      Clear
    </Styled.ClearButtonElement>
  )
}
