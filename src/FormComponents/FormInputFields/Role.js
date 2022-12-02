import { options } from "../../utils"
import * as Styled from "../styled"

export const Role = ({ onChange, role }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <Styled.InputWrapper>
      <Styled.RoleDiv
        type="text"
        onChange={handleChange}
        value={role || ""}
        name="role"
        required
      >
        {options.map((option) =>
          option === "Role" ? (
            <Styled.OptionItem value={""} key={options.indexOf(option)} hidden>
              {option}
            </Styled.OptionItem>
          ) : (
            <Styled.OptionItem value={option} key={options.indexOf(option)}>
              {option}
            </Styled.OptionItem>
          )
        )}
      </Styled.RoleDiv>
    </Styled.InputWrapper>
  )
}
