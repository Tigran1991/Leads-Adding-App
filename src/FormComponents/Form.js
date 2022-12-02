import {
  checkEmailValidation,
  checkPhoneValidation,
  createLeadData,
  formInitialState,
} from "../utils"
import {
  useGetLeadsQuery,
  useAddLeadMutation,
  useUpdateLeadMutation,
  useDeleteLeadMutation,
} from "../redux/app/api/apiSlice"
import { Buttons } from "./Buttons/Buttons"
import { Email } from "./FormInputFields/Email"
import { FirstName } from "./FormInputFields/FirstName"
import { LastName } from "./FormInputFields/LastName"
import { Organization } from "./FormInputFields/Organization"
import { Phone } from "./FormInputFields/Phone"
import { Role } from "./FormInputFields/Role"
import * as Styled from "./styled"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedLead } from "../redux/features/selectedLeadReducerSlice"
import { useEffect, useState } from "react"

export const Form = () => {
  const dispatch = useDispatch()
  const [addLead] = useAddLeadMutation()
  const [updateLead] = useUpdateLeadMutation()
  const selectedLead = useSelector((state) => state.selectedLead.lead)
  const selectedLeadId = useSelector((state) => state.selectedLeadId.id)
  const mustBeUpdated = useSelector((state) => state.submitProperty.property)

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailValidationStatus = checkEmailValidation(e.target.email.value)
    const phoneValidationStatus = checkPhoneValidation(e.target.phone.value)
    const leadData = createLeadData(e, selectedLeadId)
    if (emailValidationStatus && phoneValidationStatus && !mustBeUpdated) {
      addLead(leadData)
      setFirstNameValue("")
      setLastNameValue("")
      setOrganizationValue("")
      setRoleValue("")
      setPhoneValue("")
      setEmailValue("")
    } else if (
      emailValidationStatus &&
      phoneValidationStatus &&
      mustBeUpdated
    ) {
      updateLead({ ...leadData, completed: !leadData.completed })
    }
  }

  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [organizationValue, setOrganizationValue] = useState("")
  const [roleValue, setRoleValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [emailValue, setEmailValue] = useState("")

  useEffect(() => {
    setFirstNameValue(selectedLead.firstName)
    setLastNameValue(selectedLead.lastName)
    setOrganizationValue(selectedLead.organization)
    setRoleValue(selectedLead.role)
    setPhoneValue(selectedLead.phone)
    setEmailValue(selectedLead.email)
  }, [selectedLead])

  return (
    <Styled.FormWrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <FirstName
          onChange={(value) => setFirstNameValue(value)}
          firstName={firstNameValue}
        />
        <LastName
          onChange={(value) => setLastNameValue(value)}
          lastName={lastNameValue}
        />
        <Organization
          onChange={(value) => setOrganizationValue(value)}
          organization={organizationValue}
        />
        <Role onChange={(value) => setRoleValue(value)} role={roleValue} />
        <Email onChange={(value) => setEmailValue(value)} email={emailValue} />
        <Phone onChange={(value) => setPhoneValue(value)} phone={phoneValue} />
        <Buttons />
      </Styled.Form>
    </Styled.FormWrapper>
  )
}
