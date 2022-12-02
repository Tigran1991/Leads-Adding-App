import * as Styled from "./styled"
import { Form } from "./FormComponents/Form"
import { Filter } from "./FilterComponents/Filter"
import { List } from "./ListComponents/List"

function App() {
  return (
    <Styled.AppWrapper>
      <Form />
      <Filter />
      <List />
    </Styled.AppWrapper>
  )
}

export default App
