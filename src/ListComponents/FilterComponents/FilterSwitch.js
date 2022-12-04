import { useState } from "react"
import * as Styled from "./styled"

export const FilterSwitch = () => {
  const [todo, setTodo] = useState()

  const handleChange = (e) => {
    setTodo(!todo)
  }

  return (
    <>
      <Styled.Switch>
        <Styled.Checkbox type="checkbox" onChange={handleChange} />
        <Styled.SliderRound />
      </Styled.Switch>
    </>
  )
}
