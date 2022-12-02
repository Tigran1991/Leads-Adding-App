import * as Styled from "../styled"

export const FirstName = ({ onChange, firstName }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

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
}
