import './App.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AjinkyaProfile from './Components/AjinkyaProfile'
import LoginPage from "./register/LoginPage"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path='/ajinkya' element = {<AjinkyaProfile/>} />
      <Route path='/signup' element = {<LoginPage/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
