import * as Styled from "./styled"

export const FilterSwitch = () => {
  const handleChange = (e) => {
    console.log(e.target.value)
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
