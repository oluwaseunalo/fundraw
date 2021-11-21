import React from 'react'

import { DrawingPage, HomePage, LoginPage, ProfileUpdate, SignUpPage, UserDrawing } from './components'

const App = () => {
  return (
    <div>
      <HomePage/>
      <LoginPage/>
      <ProfileUpdate/>
      <SignUpPage/>
      <UserDrawing/>
      <DrawingPage/>
    </div>
  )
}

export default App;
