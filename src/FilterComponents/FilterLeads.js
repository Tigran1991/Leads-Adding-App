import * as Styled from "./styled"

export const FilterLeads = () => {
  return (
    <Styled.FilterFieldWrapper>
      <Styled.FilterField
        type="search"
        placeholder="Filter Leads"
      ></Styled.FilterField>
      <Styled.SearchIcon />
    </Styled.FilterFieldWrapper>
  )
}
