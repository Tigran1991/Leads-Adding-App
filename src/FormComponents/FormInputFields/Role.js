import { useState } from "react"
import * as Styled from "../styled"

export const Role = () => {
  const [roleValue, setRoleValue] = useState("")

  const options = [
    "Role",
    "CEO",
    "Manager",
    "Account Manager",
    "Owner",
    "Operations",
    "Board Member",
  ]

  const handleChange = (e) => {
    setRoleValue(e.target.value)
  }

  return (
    <Styled.InputWrapper>
      <Styled.RoleDiv
        type="text"
        onChange={handleChange}
        value={roleValue}
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
