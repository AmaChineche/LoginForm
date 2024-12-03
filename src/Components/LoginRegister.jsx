import React from 'react'
import './LoginRegister.css';
import { useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const LoginRegister = () => {
    // const [action, setAction]= useState(" ");
    // const registerLink=()=>{
    //     setAction('active');
    // };
    // const loginLink=()=>{
    //     setAction('active');
    // };
//  ******Validation*********
const initialValues = {username: "", email:"", password:""};
const [formValues, setFormValues]= useState(initialValues)
 const [formErrors, setFormErrors]=useState({})
const [isSubmit, setIsSubmit]=useState(false);
//state to mange form switching (login or regiter)
const [isLogin , setIsLogin]= useState(true) //default is login form
 const handleChange=(e)=>{
   // console.log(e.target.value);
    const {name, value} = e.target;
    setFormValues((prevFormValues)=>({...prevFormValues, [name]: value}));
          //console.log(formValues);
  };
  useEffect(()=>{
    console.log(formValues);
  }, [formValues]);
  const handleSubmit=(e)=>{
    e.preventDefault()
   setFormErrors(validate(formValues));
   setIsSubmit(true)
  };
  useEffect(()=>{
   // console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues)
    }
  },[formErrors]);
  const validate=(values)=>{
    const errors={};
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.username){
        errors.username="username is required"
    }
    if (!values.email){
        errors.email="email is required"
    }else if(!regex.test(values.email)){
        errors.email="this is not a valid format"
    }
    if (!values.password){
        errors.password="password is required"
    }else if(values.password.length<4){
        errors.password="password must be at least 4 character long"
     }else if(values.password.length>10){
        errors.password="password can not exceeed character"
    }
    return errors
  }
return (
    <div>
      {/* Success Message */}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="successMessage">Signed in successfully</div>
      ) : " "}
      {/* to displa what is being typed***
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      {/* {conditional rendering for login or register form} */}
      {isLogin ? (
         // LOGIN FORM 
       <div className="wrapper">
                 <div className="form-box login">
                    {/* <pre>{JSON.stringify(formValues,undefined, 2)}</pre> */}
                        <form action="" onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type="text" 
                                name="username"
                                value={formValues.username}
                                onChange={handleChange}
                                placeholder='UserName' />
                            <FaUser className='icon' />
                            </div>
                            <p className='error'>{formErrors.username}</p>

                            <div className="input-box">
                                <input type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                placeholder='Password'/>
                        <FaLock className='icon'  />
                            </div>
                            <p className='error'>{formErrors.password}</p>

                            <div className='remember-forget'>
                        <label > <input type="checkbox" 
                                    onChange={handleChange}  />
                        remember</label>
                        <a href="#"> Forget Password</a>
                            </div>
                            <button  type='submit'>
                            Login   
                            </button>
                            <div className="register-link">
                                <p>Dont have an account?</p> <a href="#" onClick={()=>setIsLogin(false)}>Register</a> 
                                </div>
                        
                        </form>
                 </div> 
                 </div>
      ):(
  //REGISTRATION SECTION
  <div className="form-box-Register">
                    {/* <pre>{JSON.stringify(formValues,undefined, 2)}</pre>  */}
                        <form action=""  onSubmit={handleSubmit}>

                            <h1>Registration</h1>
                            <div className="input-box">
                                <input type="text" 
                                name='username'
                                value={formValues.username}
                                onChange={handleChange}
                            placeholder='UserName' />
                            <FaUser className='icon' />
                            </div>
                            <p className='error'>{formErrors.username}</p>
                            <div className="input-box">
                                <input type="email"
                                name='email'
                                value={formValues.email}
                                onChange={handleChange}
                                placeholder='Email'  />
                        <MdEmail className='icon' />
                            </div>
                            <p className='error'>{formErrors.email}</p>
                            <div className="input-box">
                                <input type="password"
                                name='password'
                                value={formValues.password}
                                onChange={handleChange}
                                placeholder='Password' />
                        <FaLock className='icon'  />
                            </div>
                            <p  className='error'>{formErrors.password}</p>
                            <button  type='submit'>
                            Login   
                            </button>
                            <div className="register-link">
                                <p>Already have an account? </p>
                                    <a href="#" onClick={()=>setIsLogin(true)} >Login</a>
                            
                            </div>
                        
                        </form>
                    </div>

      )}
      </div>
);

};

export default LoginRegister