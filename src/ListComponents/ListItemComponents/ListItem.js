import { useDispatch } from "react-redux"
import { getSelectedLead } from "../../redux/features/selectedLeadReducerSlice"
import * as Styled from "./styled"
import {
  useDeleteLeadMutation,
  useUpdateLeadMutation,
} from "../../redux/app/api/apiSlice"
import { setSubmitProperty } from "../../redux/features/submitPropertyReducerSlice"
import { getSelectedLeadId } from "../../redux/features/selectedLeadIdReducerSlice"
import { getDeletedLeadId } from "../../redux/features/deletedLeadIdReducerSlice"
import useClickPreventionOnDoubleClick from "./customHooks/useClickPreventionOnDoubleClick"

export const ListItem = ({ listItemdata }) => {
  const [updateLead] = useUpdateLeadMutation()
  const [deleteItem] = useDeleteLeadMutation()
  const dispatch = useDispatch()

  const { firstName, lastName, organization, role, email, phone } = listItemdata

  const onClick = (e) => {
    dispatch(getSelectedLead(listItemdata))
    dispatch(setSubmitProperty(true))
    dispatch(getSelectedLeadId(listItemdata.id))
  }

  const onDoubleClick = (e) => {
    updateLead({
      ...listItemdata,
      selected: !listItemdata.selected,
    })
  }

  const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
    onClick,
    onDoubleClick
  )

  const deleteItemElement = (e) => {
    e.stopPropagation()
    deleteItem({ id: listItemdata.id })
    dispatch(getDeletedLeadId(listItemdata.id))
  }

  const LIST_ITEM_ELEMENTS = [
    `${firstName} ${lastName}`,
    `${role}/${organization}`,
    email,
    phone,
  ]

  return (
    <>
      <Styled.ListItemDiv
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        color={listItemdata.selected ? "green" : "#333"}
      >
        {LIST_ITEM_ELEMENTS.map((element) => {
          return (
            <span key={LIST_ITEM_ELEMENTS.indexOf(element)}>{element}</span>
          )
        })}
        <Styled.DeleteItemDiv
          onClick={deleteItemElement}
        ></Styled.DeleteItemDiv>
      </Styled.ListItemDiv>
    </>
  )
}
