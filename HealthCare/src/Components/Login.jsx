
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

    const navigate = useNavigate();

    const { user , loginWithRedirect, isAuthenticated, logout} = useAuth0();

    console.log("Current user :", user);

    function OnClickGoogle(){
        // window.location.href = ('https://accounts.google.com/v3/signin/accountchooser?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AdBytiOj7KzT152VAuyfvkPCUfxOTkY51CgFjpmE5GwiesL5fOB4SfBjmIXrnz6F4N7w6p5v02bd&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S322438728%3A1751022836077403');  
    }

    function OnClickFacebook(){
        // window.open('https://www.facebook.com/');
    }

  return (
    <>
        <div className = 'login-form '>
            <img src="https://preclinic.dreamstechnologies.com/html/template/assets/img/logo.svg" alt="" />
            <form action='index.html'>
                <div className='signin-details'>
                    <h2>Log In</h2>
                    <p style={{color : '#9DA4B0'}}>Please enter below details to access the dashboard</p>
                </div>
                <div className='email-pass'>     
                    <label htmlFor="">Email Address</label>
                    <div className='inputs'>
                        <div className='icon'><i class="fa-regular fa-envelope"></i></div>
                        <input type="email" placeholder='Enter email address'/>
                    </div>
                    <label htmlFor="">Password</label>
                    <div className='inputs'>
                        <div className='icon'><i class="fa-solid fa-lock"></i></div>
                        <input type="password" placeholder='*********'/>
                    </div>
                </div>
                <div className='check-pass'>
                    <div className='check-label'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <div>
                        <a href="">Forgot Password</a>
                    </div>
                </div>
                <div>
                    <button className='btn-log-in'>Log In</button>
                </div>
                <p style={{width:'100%', textAlign:'center',color:'#9DA4B0', marginBottom:'2vh'}}>OR</p>
                <div className='btn-socials'>
                    {isAuthenticated ? navigate('/ajinkya') : <></>}
                    <button onClick={() => loginWithRedirect()} className='btn'><i class="fa-brands fa-google"></i></button>
                    <button onClick={() => OnClickFacebook()} className='btn'><i class="fa-brands fa-facebook"></i></button>
                </div>
                <div className='form-foot'>
                    <p>Don't have an account yet? <a href="">Register</a></p>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login
