import { memo, useCallback } from "react"
import * as Styled from "../styled"

export const Organization = memo(({ onChange, organization }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange]
  )

  return (
    <Styled.InputWrapper>
      <Styled.OrganizationDiv
        type="text"
        placeholder="Organization"
        onChange={handleChange}
        value={organization || ""}
        name="organization"
        required
      />
    </Styled.InputWrapper>
  )
})
