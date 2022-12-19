import styled from "styled-components"

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
`

export const FirstNameDiv = styled.input`
  width: 100%;
  padding: 2px;
`

export const LastNameDiv = styled.input`
  width: 100%;
  padding: 2px;
`

export const OrganizationDiv = styled.input`
  width: 100%;
  padding: 2px;
`

export const RoleDiv = styled.select`
  width: 100%;
  background-color: grey;
  padding: 2px;
  color: #fff;
`

export const OptionItem = styled.option`
  background-color: #fff;
  color: #333;
`

export const EmailDiv = styled.input`
  padding: 2px;
  width: 100%;
  margin-bottom: 3px;
`

export const FormFieldValidity = styled.span`
  position: absolute;
  left: 103%;
  color: red;
  width: 200px;
`

export const PhoneDiv = styled.input`
  width: 100%;
  padding: 2px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`

export const SaveButtonElement = styled.button`
  width: 40%;
  height: 30px;
  background-color: blue;
  border-radius: 3px;
  color: #fff;
  border: none;
  cursor: pointer;
`

export const ClearButtonElement = styled.button`
  width: 40%;
  height: 30px;
  background-color: blue;
  border-radius: 3px;
  color: #fff;
  border: none;
  cursor: pointer;
`
