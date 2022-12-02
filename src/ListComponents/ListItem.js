import { useDispatch } from "react-redux"
import { getSelectedLead } from "../redux/features/selectedLeadReducerSlice"
import * as Styled from "./styled"
import { useDeleteLeadMutation } from "../api/apiSlice"

export const ListItem = ({ listItemdata }) => {
  const [deleteItem] = useDeleteLeadMutation()
  const dispatch = useDispatch()
  const { firstName, lastName, organization, role, email, phone } = listItemdata

  const updateListItemContent = () => {
    dispatch(getSelectedLead(listItemdata))
  }

  const deleteItemElement = () => {
    deleteItem({ id: listItemdata.id })
  }

  return (
    <>
      <Styled.ListItemDiv onClick={updateListItemContent}>
        <span>{`${firstName} ${lastName}`}</span>
        <span>{`${role}/${organization}`}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <Styled.DeleteItemDiv
          onClick={deleteItemElement}
        ></Styled.DeleteItemDiv>
      </Styled.ListItemDiv>
    </>
  )
}
