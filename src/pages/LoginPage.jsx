import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css';
import { useAuth } from '../services/AuthProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  const { loginAction } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const Login = (event) => {
    try {
    // Prevent default form submit behavior
    event.preventDefault();

    loginAction({
       email: email,
       password: password,
     });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Navbar />
    <div className="login-display ">
      <div className="login-wrapper">
        <form action="">
          <h1 className='font-semibold'>Login</h1>
          <div className="login-input-box">
            <input type="text" placeholder="Email" name='email' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="login-input-box">
            <input type="password" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)} required />
          </div>
          
            <button className="login-button" type="submit" onClick={Login}>Login</button>
          
          <div className="register-container">
            <p className='text-sm'>Don't have an account?</p>
            <Link to="/sign_up">
              <p className="register-link text-sm">Register</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default LoginPage