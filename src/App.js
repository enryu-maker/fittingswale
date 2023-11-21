import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
import AuthScreen from './Screens/Auth/AuthScreen'
import Download from './Screens/Home/Download'
import Contact from './Screens/Home/Contact'
import CatInfo from './Screens/Home/CatInfo'
import ProdInfo from './Screens/Home/ProdInfo'
import Privacy from './Constants/Privacy'
import Cart from './Screens/Home/Cart'
import Profile from './Screens/Home/Profile'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthScreen />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/download" element={<Download />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/catinfo" element={<CatInfo />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/catinfo/prodinfo/:pid" element={<ProdInfo />} />
      <Route path="/prodinfo/:pid" element={<ProdInfo />} />
    </Routes>
  )
}
