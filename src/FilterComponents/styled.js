import styled from "styled-components"
import searchButton from "../images/search-button.png"

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`

export const FilterFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 80%;
`

export const FilterField = styled.input`
  width: 100%;
  padding: 2px;
`

export const SearchIcon = styled.button`
  position: absolute;
  width: 14px;
  height: 14px;
  right: 10px;
  background: url(${searchButton});
  background-size: contain;
  border: none;
  cursor: pointer;
`

export const ChooseState = styled.input`
  width: 30px;
  cursor: pointer;
`

export const SelectedState = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 21px;
`
/* Hide default HTML checkbox */

export const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${SliderRound} {
    background-color: #2196f3;
  }
  &:focus + ${SliderRound} {
    box-shadow: 0 0 1px #2196f3;
  }
  &:checked + ${SliderRound}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(15px);
  }
`
