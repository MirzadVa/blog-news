/* eslint-disable react/prop-types */
import React from 'react';
import './app.css'
import MainLayout from './layout/MainLayout';

import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <>
        <MainLayout />
      </>
    </Router>
  )
}

export default App;
