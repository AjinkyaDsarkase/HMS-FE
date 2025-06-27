import React from 'react'
import LogoHead from './LogoHead'
import heaxagon from '../assets/hexagon.jpg'
import cubes from '../assets/cubes.jpg'
import '../styles/Login.css'

function Login() {
  return (
    <>
        <div className = 'login-form'>
            <img src="https://preclinic.dreamstechnologies.com/html/template/assets/img/logo.svg" alt="" />
            <form action='index.html'>
                <div className='signin-details'>
                    <h3>Sign In</h3>
                    <p style={{color : '#9DA4B0'}}>Please enter below details to access the dashboard</p>
                </div>
                <div className='email-pass'>     
                    <label htmlFor="">Email Address</label>
                    <div className='inputs'>
                        <div className='icon'><i class="fa-regular fa-envelope"></i></div>
                        <input type="text" placeholder='Enter email address'/>
                    </div>
                    <label htmlFor="">Password</label>
                    <div className='inputs'>
                        <div className='icon'><i class="fa-solid fa-lock"></i></div>
                        <input type="text" placeholder='*********'/>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </form>
        </div>
    </>
  )
}

export default Login
