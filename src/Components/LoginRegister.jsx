import React from 'react'
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const LoginRegister = () => {
  return (
    <div>
      <div className='wrapper'>
      <div className="form-box login">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" 
                placeholder='UserName' required/>
            <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password"
                placeholder='Password' required />
           <FaLock className='icon'  />
            </div>

            <div className='remember-forget'>
        <label > <input type="checkbox" />
        remember</label>
        <a href="#"> Forget Password</a>
            </div>
            <button  type='submit'>
            Login   
            </button>
            <div className="regidter-link">
                <p>Dont have an account?
                    <a href="#">Register</a>
                </p>

            </div>
         
        </form>
      </div>

      <div className="form-box Register">
        <form action="">
            <h1>Registration</h1>
            <div className="input-box">
                <input type="text" 
                placeholder='UserName' required/>
            <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="email"
                placeholder='Email' required />
           <MdEmail className='icon' />
            </div>

            <div className="input-box">
                <input type="password"
                placeholder='Password' required />
           <FaLock className='icon'  />
            </div>

            <div className='remember-forget'>
        <label > <input type="checkbox" />
        remember</label>
        <a href="#"> Forget Password</a>
            </div>
            <button  type='submit'>
            Login   
            </button>
            <div className="regidter-link">
                <p>Dont have an account?
                    <a href="#">Register</a>
                </p>

            </div>
         
        </form>
      </div>

      </div>
    </div>
  )
}

export default LoginRegister
