import { useDispatch } from "react-redux"
import * as Styled from "./styled"

export const FilterSwitch = ({ onChangeListDisplayState }) => {
  const dispatch = useDispatch()
  const handleDisplayState = (e) => {
    onChangeListDisplayState(e.target.value)
  }

  return (
    <>
      <Styled.Switch>
        <Styled.Checkbox type="checkbox" onChange={handleDisplayState} />
        <Styled.SliderRound />
      </Styled.Switch>
    </>
  )
}
