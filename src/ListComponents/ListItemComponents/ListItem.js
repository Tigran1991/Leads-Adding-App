import { useDispatch } from "react-redux"
import { getSelectedLead } from "../../redux/features/selectedLeadReducerSlice"
import * as Styled from "./styled"
import { useDeleteLeadMutation } from "../../redux/app/api/apiSlice"
import { setSubmitProperty } from "../../redux/features/submitPropertyReducerSlice"
import { getSelectedLeadId } from "../../redux/features/selectedLeadIdReducerSlice"
import { getDeletedLeadId } from "../../redux/features/deletedLeadIdReducerSlice"

export const ListItem = ({ listItemdata }) => {
  const [deleteItem] = useDeleteLeadMutation()
  const dispatch = useDispatch()
  const { firstName, lastName, organization, role, email, phone } = listItemdata

  const updateListItemContent = () => {
    dispatch(getSelectedLead(listItemdata))
    dispatch(setSubmitProperty(true))
    dispatch(getSelectedLeadId(listItemdata.id))
  }

  const deleteItemElement = (e) => {
    e.stopPropagation()
    deleteItem({ id: listItemdata.id })
    dispatch(getDeletedLeadId(listItemdata.id))
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
