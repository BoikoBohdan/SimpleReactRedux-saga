import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { testPage } from '../pages'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Route exact path='/' component={testPage} />
      </>
    </BrowserRouter>
  )
}

export default AppRouter
