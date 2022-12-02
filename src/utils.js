export const formInitialState = {
  firstName: "",
  lastName: "",
  organization: "",
  role: "",
  email: "",
  phone: "",
}

export const options = [
  "Role",
  "CEO",
  "Manager",
  "Account Manager",
  "Owner",
  "Operations",
  "Board Member",
]

export const createLeadData = (event, selectedId) => {
  return {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    organization: event.target.organization.value,
    role: event.target.role.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    id: selectedId,
  }
}

export const checkEmailValidation = (email) => {
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/
  if (regEx.test(email)) {
    return true
  } else if (!regEx.test(email)) {
    return false
  }
}

export const checkPhoneValidation = (phone) => {
  const regEx = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
  if (regEx.test(phone)) {
    return true
  } else if (!regEx.test(phone)) {
    return false
  }
}
