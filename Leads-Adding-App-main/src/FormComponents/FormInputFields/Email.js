import { memo, useCallback, useRef, useState } from "react"
import { checkEmailValidation } from "../../utils"
import * as Styled from "../styled"

export const Email = memo(({ onChange, email }) => {
  const emailRef = useRef()
  const [isValid, setIsValid] = useState(true)

  const handleChange = useCallback(
    (e) => {
      const emailValidation = checkEmailValidation(e.target.value)
      onChange({
        value: e.target.value,
        validation: emailValidation,
      })

      if (emailValidation || emailRef.current.value === "") {
        setIsValid(true)
      } else if (!emailValidation) {
        setIsValid(false)
      }
    },
    [onChange]
  )

  return (
    <Styled.InputWrapper>
      <Styled.EmailDiv
        type="email"
        placeholder="Email"
        ref={emailRef}
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
})
