
import './App.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AjinkyaProfile from './Components/AjinkyaProfile'

import LogoHead from './Components/LogoHead'
import LoginPage from "./register/LoginPage"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/ajinkya' element = {<AjinkyaProfile/>} />
    </Routes>
    </BrowserRouter>
    
    {/* <LogoHead/>   */}
    {/* <Login/> */}
    <LoginPage/>
    </>
  )
}

export default App
