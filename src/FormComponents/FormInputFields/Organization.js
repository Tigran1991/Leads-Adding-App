import { useState } from "react"
import * as Styled from "../styled"

export const Organization = () => {
  const [organizationValue, setOrganizationValue] = useState("")

  const handleChange = (e) => {
    setOrganizationValue(e.target.value)
  }

  return (
    <Styled.InputWrapper>
      <Styled.OrganizationDiv
        type="text"
        placeholder="Organization"
        onChange={handleChange}
        value={organizationValue}
        name="organization"
        required
      />
    </Styled.InputWrapper>
  )
}
