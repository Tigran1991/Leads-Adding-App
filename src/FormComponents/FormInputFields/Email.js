import { useEffect, useState } from "react"
import { checkEmailValidation } from "../../utils"
import * as Styled from "../styled"

export const Email = ({ onChange, email }) => {
  const [isValid, setIsValid] = useState(true)

  const handleChange = (e) => {
    onChange(e.target.value)
    const emailValidation = checkEmailValidation(e.target.value)
    if (emailValidation) {
      setIsValid(true)
    } else if (!emailValidation) {
      setIsValid(false)
    }
  }

  return (
    <Styled.InputWrapper>
      <Styled.EmailDiv
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={email || ""}
        name="email"
        required
      />
      {!isValid && (
        <Styled.FormFieldValidity>
          Please enter valid email !
        </Styled.FormFieldValidity>
      )}
    </Styled.InputWrapper>
  )
}
