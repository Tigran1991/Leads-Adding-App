import * as Styled from "../styled"

export const LastName = ({ onChange, lastName }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
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
}
