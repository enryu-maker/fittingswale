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
import Terms from './Constants/Terms'
import Refund from './Constants/Refund'
import About from './Constants/About'
import Cat from './Screens/Mobile.js/Cat'
import More from './Screens/Mobile.js/More'
import MoreInfo from './Screens/Mobile.js/MoreInfo'
import { useDispatch, useSelector } from 'react-redux'
import { Init } from './Store/actions'
import Checkout from './Screens/Home/Order/Checkout'

export default function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    // dispatch(Init())
  }, [])
  const access = useSelector(state => state.Reducers.access)
  return (
    <>
      {
        access != null ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/more" element={<More />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/moreinfo" element={<MoreInfo />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/download" element={<Download />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/catinfo" element={<CatInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/catinfo/prodinfo/:pid" element={<ProdInfo />} />
            <Route path="/prodinfo/:pid" element={<ProdInfo />} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/more" element={<More />} />
            <Route path="/moreinfo" element={<MoreInfo />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/download" element={<Download />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/catinfo" element={<CatInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/catinfo/prodinfo/:pid" element={<ProdInfo />} />
            <Route path="/prodinfo/:pid" element={<ProdInfo />} />
          </Routes>
      }
    </>
  )
}
