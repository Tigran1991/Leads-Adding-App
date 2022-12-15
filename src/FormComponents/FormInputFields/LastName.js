import { memo, useCallback } from "react"
import * as Styled from "../styled"

export const LastName = memo(({ onChange, lastName }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange]
  )
  return (
    <Styled.InputWrapper>
      <Styled.LastNameDiv
        type="text"
        placeholder="LastName"
        onChange={handleChange}
        value={lastName || ""}
        name="lastName"
        required
      />
    </Styled.InputWrapper>
  )
})
