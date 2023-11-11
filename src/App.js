import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
