import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <>
      <div className="login-page">
          <div className="login">
            <h2>Login</h2>
            <label htmlFor="username">What's your email ?</label>
            <br />
            <input type="text" id="username" placeholder="Email" required="" />
            <label htmlFor="password">Your password ?</label>
            <br />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              required=""
            />
            <button className='lg-btn'>
              <a id="login-button" href="index.html">
                Login
              </a>
            </button> 
            <div className="footer-links">
              <a href="">Create Account</a>
              <a href="" style={{position : 'relative', left : '30px'}}>Forgot your password?</a>
            </div>
          </div>
        </div>
    </>
  )
}
