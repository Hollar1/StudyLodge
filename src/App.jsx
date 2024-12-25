import { useState } from 'react'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Payment from './components/Payment'
import Home from './components/Home'
import Profile from './components/Profile'
import Hostel from './components/Hostel'
import Otp from './components/Otp'
import About from './components/About'
import { ReactNotifications } from 'react-notifications-component'


function App() {


  return (
    <div>
    <ReactNotifications/>
     <Routers>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Hostel' element={<Hostel/>}/>
        <Route path='/Otp' element={<Otp/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
     </Routers>
    </div>
  )
}

export default App
