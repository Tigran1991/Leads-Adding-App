import * as Styled from "../styled"

export const Organization = ({ onChange, organization }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

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
}
