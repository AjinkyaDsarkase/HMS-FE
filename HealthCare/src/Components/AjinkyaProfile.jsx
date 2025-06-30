import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function AjinkyaProfile() {
    const {logout} = useAuth0();
  return (
    <div>
      <h1>Hello Ajinkya</h1>
      <button onClick={() => logout()}>LogOut</button>
    </div>
  )
}

export default AjinkyaProfile
