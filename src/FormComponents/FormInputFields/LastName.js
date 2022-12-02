import { useState } from "react"
import * as Styled from "../styled"

export const LastName = () => {
  const [lastNameValue, setLastNameValue] = useState("")

  const handleChange = (e) => {
    setLastNameValue(e.target.value)
  }

  return (
    <Styled.InputWrapper>
      <Styled.LastNameDiv
        type="text"
        placeholder="LastName"
        onChange={handleChange}
        value={lastNameValue}
        name="lastName"
        required
      />
    </Styled.InputWrapper>
  )
}
