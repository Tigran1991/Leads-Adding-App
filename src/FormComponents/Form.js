import { createLeadData, modifyPhoneFormat } from "../utils"
import {
  useAddLeadMutation,
  useUpdateLeadMutation,
} from "../redux/app/api/apiSlice"
import { setSubmitProperty } from "../redux/features/submitPropertyReducerSlice"
import { Buttons } from "./Buttons/Buttons"
import { Email } from "./FormInputFields/Email"
import { FirstName } from "./FormInputFields/FirstName"
import { LastName } from "./FormInputFields/LastName"
import { Organization } from "./FormInputFields/Organization"
import { Phone } from "./FormInputFields/Phone"
import { Role } from "./FormInputFields/Role"
import * as Styled from "./styled"
import { memo, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSelectedLeadId } from "../redux/features/selectedLeadIdReducerSlice"

export const Form = memo(() => {
  const dispatch = useDispatch()
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [organizationValue, setOrganizationValue] = useState("")
  const [roleValue, setRoleValue] = useState("")
  const [phoneValue, setPhoneValue] = useState({ value: "", validation: false })
  const [emailValue, setEmailValue] = useState({ value: "", validation: false })

  const clearFormFields = () => {
    setFirstNameValue("")
    setLastNameValue("")
    setOrganizationValue("")
    setRoleValue("")
    setPhoneValue({ value: "", validation: false })
    setEmailValue({ value: "", validation: false })
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
    const leadData = createLeadData(e, selectedLeadId, selectedLead.selected)
    console.log(leadData)
    if (emailValue.validation && phoneValue.validation) {
      if (!mustBeUpdated) {
        addLead(leadData)
        clearFormFields()
      } else if (mustBeUpdated) {
        updateLead({ ...leadData })
        dispatch(setSubmitProperty(false))
        dispatch(getSelectedLeadId(null))
        clearFormFields()
      }
    }
  }

  useEffect(() => {
    setFirstNameValue(selectedLead.firstName)
    setLastNameValue(selectedLead.lastName)
    setOrganizationValue(selectedLead.organization)
    setRoleValue(selectedLead.role)
    setPhoneValue({ value: selectedLead.phone, validation: true })
    setEmailValue({ value: selectedLead.email, validation: true })
  }, [selectedLead])

  useEffect(() => {
    clearFormFields()
  }, [deletedLeadId, clearButtonState])

  const setPhone = (value) => {
    const input = value.value
    const validation = value.validation
    const phone = modifyPhoneFormat(input)
    setPhoneValue({ value: phone, validation: validation })
  }

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
        <Email
          onChange={(value) => setEmailValue(value)}
          email={emailValue.value}
        />
        <Phone onChange={setPhone} phone={phoneValue.value} />
        <Buttons />
      </Styled.Form>
    </Styled.FormWrapper>
  )
})
