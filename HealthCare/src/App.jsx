import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import LogoHead from './Components/LogoHead'
import LoginPage from "./register/LoginPage"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LogoHead/>   */}
    {/* <Login/> */}
    <LoginPage/>
    </>
  )
}

export default App
