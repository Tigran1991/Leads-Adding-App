import { useState } from "react"
import { checkPhoneValidation } from "../../utils"
import * as Styled from "../styled"

export const Phone = () => {
  const [phoneValue, setPhoneValue] = useState("")
  const [isValid, setIsValid] = useState(true)

  const handleChange = (e) => {
    setPhoneValue(e.target.value)
    const emailValidation = checkPhoneValidation(e.target.value)
    if (emailValidation) {
      setIsValid(true)
    } else if (!emailValidation) {
      setIsValid(false)
    }
  }

  return (
    <Styled.InputWrapper>
      <Styled.PhoneDiv
        type="tel"
        placeholder="Phone"
        onChange={handleChange}
        value={phoneValue}
        name="phone"
        required
      />
      {!isValid && (
        <Styled.FormFieldValidity>
          Please enter valid phone number !
        </Styled.FormFieldValidity>
      )}
    </Styled.InputWrapper>
  )
}
