import {
  checkEmailValidation,
  checkPhoneValidation,
  formInitialState,
} from "../utils"
import {
  useGetLeadsQuery,
  useAddLeadMutation,
  useUpdateLeadMutation,
  useDeleteLeadMutation,
} from "../api/apiSlice"
import { Buttons } from "./Buttons/Buttons"
import { Email } from "./FormInputFields/Email"
import { FirstName } from "./FormInputFields/FirstName"
import { LastName } from "./FormInputFields/LastName"
import { Organization } from "./FormInputFields/Organization"
import { Phone } from "./FormInputFields/Phone"
import { Role } from "./FormInputFields/Role"
import * as Styled from "./styled"

export const Form = () => {
  const [addLead] = useAddLeadMutation()

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailValidationStatus = checkEmailValidation(e.target.email.value)
    const phoneValidationStatus = checkPhoneValidation(e.target.phone.value)
    const leadData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      organization: e.target.organization.value,
      role: e.target.role.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    }
    if (emailValidationStatus && phoneValidationStatus) {
      addLead(leadData)
    }
  }

  return (
    <Styled.FormWrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <FirstName />
        <LastName />
        <Organization />
        <Role />
        <Email />
        <Phone />
        <Buttons />
      </Styled.Form>
    </Styled.FormWrapper>
  )
}
