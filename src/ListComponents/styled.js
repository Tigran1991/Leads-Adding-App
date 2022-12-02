import styled from "styled-components"
import deleteItem from "../images/delete-item.png"

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: normal;
  width: 100%;
  height: 60vh;
  margin-top: 10px;
`

export const ListItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 30%;
  position: relative;
  border: 2px solid;
  border-color: ${(props) => props.color};
  border-radius: 20px;
  margin-top: 10px;
`

export const ListItemContent = styled.span``

export const DeleteItemDiv = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 9px;
  top: 9px;
  background: url(${deleteItem});
  background-size: contain;
  border: none;
  cursor: pointer;
`
