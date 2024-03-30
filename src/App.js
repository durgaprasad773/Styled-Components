import {Heading, CustomButton} from './styledComponents'

import './App.css'

const App = () => (
  <>
    <Heading>Hello World!</Heading>
    <CustomButton outline={false}>Click</CustomButton>
    <CustomButton outline={true}>Click</CustomButton>
  </>
)

export default App
