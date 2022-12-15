import { memo, useCallback } from "react"
import * as Styled from "../styled"

export const FirstName = memo(({ onChange, firstName }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <Styled.InputWrapper>
      <Styled.FirstNameDiv
        type="text"
        placeholder="FirstName"
        onChange={handleChange}
        value={firstName || ""}
        name="firstName"
        required
      />
    </Styled.InputWrapper>
  )
})
