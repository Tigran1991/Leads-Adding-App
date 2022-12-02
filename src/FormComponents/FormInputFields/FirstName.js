import { useState } from "react"
import * as Styled from "../styled"

export const FirstName = () => {
  const [firstNameValue, setFirstNameValue] = useState("")

  const handleChange = (e) => {
    setFirstNameValue(e.target.value)
  }

  return (
    <Styled.InputWrapper>
      <Styled.FirstNameDiv
        type="text"
        placeholder="FirstName"
        onChange={handleChange}
        value={firstNameValue}
        name="firstName"
        required
      />
    </Styled.InputWrapper>
  )
}
