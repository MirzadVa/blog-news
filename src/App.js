/* eslint-disable react/prop-types */
import React from 'react'
import MainLayout from './layout/MainLayout'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

const App = () => {
  return(
    <Router>
      <>
        <MainLayout />
      </>
    </Router>
  )
}

export default App
