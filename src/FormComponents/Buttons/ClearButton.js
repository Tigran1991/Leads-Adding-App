import { useDispatch, useSelector } from "react-redux"
import { checkClearButtonState } from "../../redux/features/clearButtonStateReducerSlice"
import * as Styled from "../styled"

export const ClearButton = () => {
  const dispatch = useDispatch()
  const buttonState = useSelector((state) => state.clearButtonState.buttonState)
  const handleClick = () => {
    dispatch(checkClearButtonState(!buttonState))
  }

  return (
    <Styled.ClearButtonElement type="button" onClick={handleClick}>
      Clear
    </Styled.ClearButtonElement>
  )
}
