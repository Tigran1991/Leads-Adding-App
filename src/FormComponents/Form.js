import {
  checkEmailValidation,
  checkPhoneValidation,
  createLeadData,
} from "../utils"
import {
  useAddLeadMutation,
  useUpdateLeadMutation,
} from "../redux/app/api/apiSlice"
import { Buttons } from "./Buttons/Buttons"
import { Email } from "./FormInputFields/Email"
import { FirstName } from "./FormInputFields/FirstName"
import { LastName } from "./FormInputFields/LastName"
import { Organization } from "./FormInputFields/Organization"
import { Phone } from "./FormInputFields/Phone"
import { Role } from "./FormInputFields/Role"
import * as Styled from "./styled"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const Form = () => {
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [organizationValue, setOrganizationValue] = useState("")
  const [roleValue, setRoleValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [emailValue, setEmailValue] = useState("")

  const clearFormFields = () => {
    setFirstNameValue("")
    setLastNameValue("")
    setOrganizationValue("")
    setRoleValue("")
    setPhoneValue("")
    setEmailValue("")
  }

  const [addLead] = useAddLeadMutation()
  const [updateLead] = useUpdateLeadMutation()
  const selectedLead = useSelector((state) => state.selectedLead.lead)
  const selectedLeadId = useSelector((state) => state.selectedLeadId.id)
  const deletedLeadId = useSelector((state) => state.deletedLeadId.id)
  const mustBeUpdated = useSelector((state) => state.submitProperty.property)
  const clearButtonState = useSelector(
    (state) => state.clearButtonState.buttonState
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailValidationStatus = checkEmailValidation(e.target.email.value)
    const phoneValidationStatus = checkPhoneValidation(e.target.phone.value)
    const leadData = createLeadData(e, selectedLeadId, selectedLead.selected)
    if (emailValidationStatus && phoneValidationStatus && !mustBeUpdated) {
      addLead(leadData)
      clearFormFields()
    } else if (
      emailValidationStatus &&
      phoneValidationStatus &&
      mustBeUpdated
    ) {
      updateLead({ ...leadData })
      clearFormFields()
    }
  }

  useEffect(() => {
    setFirstNameValue(selectedLead.firstName)
    setLastNameValue(selectedLead.lastName)
    setOrganizationValue(selectedLead.organization)
    setRoleValue(selectedLead.role)
    setPhoneValue(selectedLead.phone)
    setEmailValue(selectedLead.email)
  }, [selectedLead])

  useEffect(() => {
    clearFormFields()
  }, [deletedLeadId, clearButtonState])

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
