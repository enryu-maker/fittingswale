import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import AuthScreen from './Screens/Auth/AuthScreen'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthScreen />} />
    </Routes>
  )
}
