import { useDispatch } from "react-redux"
import { getSelectedLead } from "../redux/features/selectedLeadReducerSlice"
import * as Styled from "./styled"
import {
  useDeleteLeadMutation,
  useUpdateLeadMutation,
} from "../redux/app/api/apiSlice"
import { setSubmitProperty } from "../redux/features/submitPropertyReducerSlice"
import { getSelectedLeadId } from "../redux/features/selectedLeadIdReducerSlice"

export const ListItem = ({ listItemdata }) => {
  const [updateLead] = useUpdateLeadMutation()
  const [deleteItem] = useDeleteLeadMutation()
  const dispatch = useDispatch()
  const { firstName, lastName, organization, role, email, phone } = listItemdata

  const updateListItemContent = () => {
    dispatch(getSelectedLead(listItemdata))
    dispatch(setSubmitProperty(true))
    dispatch(getSelectedLeadId(listItemdata.id))
  }

  const deleteItemElement = (e) => {
    e.stopPropogation()
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
