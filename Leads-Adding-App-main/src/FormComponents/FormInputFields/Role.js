import { memo, useCallback } from "react"
import { options } from "../../utils"
import * as Styled from "../styled"

export const Role = memo(({ onChange, role }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange]
  )

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
})
