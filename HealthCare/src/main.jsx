import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider 
    domain="dev-5iq67wkmdvwwrzrt.us.auth0.com"
    clientId="RkbicBiJzn6JDXbnNgozom1ecBdCdDYB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
