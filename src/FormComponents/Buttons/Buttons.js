import { ClearButton } from "./ClearButton"
import { SaveButton } from "./SaveButton"
import * as Styled from "../styled"

export const Buttons = () => {
  return (
    <Styled.ButtonsWrapper>
      <SaveButton />
      <ClearButton />
    </Styled.ButtonsWrapper>
  )
}
