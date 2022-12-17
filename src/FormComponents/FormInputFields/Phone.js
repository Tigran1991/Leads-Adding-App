import { memo, useCallback, useRef, useState } from "react"
import { checkPhoneValidation, modifyPhoneFormat } from "../../utils"
import * as Styled from "../styled"

export const Phone = memo(({ onChange, phone }) => {
  const phoneRef = useRef()
  const [isValid, setIsValid] = useState(true)

  const handleChange = useCallback(
    (e) => {
      const phoneInModifiedFormat = modifyPhoneFormat(e.target.value)
      const phoneValidation = checkPhoneValidation(phoneInModifiedFormat)
      onChange({
        value: e.target.value,
        validation: phoneValidation,
      })

      if (phoneValidation || phoneRef.current.value === "+") {
        setIsValid(true)
      } else if (!phoneValidation) {
        setIsValid(false)
      }
    },
    [onChange]
  )

  return (
    <Styled.InputWrapper>
      <Styled.PhoneDiv
        type="tel"
        placeholder="Phone"
        ref={phoneRef}
        onChange={handleChange}
        value={phone || ""}
        name="phone"
        maxLength={17}
        required
      />
      {!isValid && (
        <Styled.FormFieldValidity>
          Please enter valid phone number !
        </Styled.FormFieldValidity>
      )}
    </Styled.InputWrapper>
  )
})
