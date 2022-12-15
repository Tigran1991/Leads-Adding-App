export const MIN_LENGTH = 3

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

export const createLeadData = (event, selectedId, state) => {
  return {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    organization: event.target.organization.value,
    role: event.target.role.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    id: selectedId,
    selected: state,
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
  const regEx = /^\(\d{3}\)\s\d{3}-\d{4}$/
  if (regEx.test(phone)) {
    return true
  } else if (!regEx.test(phone)) {
    return false
  }
}

export const modifyPhoneFormat = (input) => {
  input = input.replace(/\D/g, "")
  let size = input.length
  if (size > 0) {
    input = "(" + input
  }
  if (size > 3) {
    input = input.slice(0, 4) + ") " + input.slice(4, 11)
  }
  if (size > 6) {
    input = input.slice(0, 9) + "-" + input.slice(9)
  }
  return input
}

const filterLeads = (leadValue, filtrableValue) => {
  for (const key in leadValue) {
    if (Object.hasOwnProperty.call(leadValue, key)) {
      const element = leadValue[key]
      if (typeof element === "string" && element.includes(filtrableValue)) {
        return leadValue
      }
    }
  }
}

export const filterByFilterInput = (leadsList, leadValue) => {
  const listData = leadsList.filter((lead) => {
    return filterLeads(lead, leadValue)
  })
  return listData
}
