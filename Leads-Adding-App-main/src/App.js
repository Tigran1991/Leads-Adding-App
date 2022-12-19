import * as Styled from "./styled"
import { Form } from "./FormComponents/Form"
import { List } from "./ListComponents/List"

function App() {
  return (
    <Styled.AppWrapper>
      <Form />
      <List />
    </Styled.AppWrapper>
  )
}

export default App
