import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useGetLeadsQuery } from "../redux/app/api/apiSlice"
import { ListItem } from "./ListItem"
import * as Styled from "./styled"

export const List = () => {
  const {
    data: leads,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadsQuery()

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = leads.map((lead) => {
      return <ListItem listItemdata={lead} key={lead.id} />
    })
  } else if (isError) {
    content = <p>{error}</p>
  }

  return <Styled.ListWrapper>{content}</Styled.ListWrapper>
}
