import React from 'react'

import { Paragraph,Button } from 'catnctlmn'
import 'catnctlmn/dist/index.css'

const App = () => {
  return (
    <>
      <Paragraph text="Nicat Leman " />
      <Button text="Click" onClick={()=>alert("adjsndj")}/>
    </>
  )
}

export default App
