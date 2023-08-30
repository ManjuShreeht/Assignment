import React, { useContext, useEffect, useState } from 'react'
import Register from './Register';
import '../styles/register.css'
import {Link,useNavigate} from 'react-router-dom'

import ContextApi from './../context/ContextApi';
import Service from './Service';

const Login = () => {
    const {userdata,setUserdata} =useContext(ContextApi);
    // console.log(userdata)

    const navigate=useNavigate();
    const local=localStorage.getItem('RegisterData')
    const data=local?JSON.parse(localStorage.getItem('RegisterData')):[];
    
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [enable,setEnable]=useState(true)
    const[errors,seterror]=useState({})

    useEffect(()=>{
        if( errors.email==false  && errors.password==false ){
    setEnable(false)
        }
        else{
            setEnable(true)  
        }
    
    })



    const handleEmail=(e)=>{
        const email_pattern=/^[a-z]+[^\s@]+@[^\s@]+\.[^\s@]+$/
        const rex=/[0-9]/
        if(email == "" || !email_pattern?.test(email)    ){
            seterror({
                ...errors,
                [e.target.name]: true
             })
            
         }
             else{
                 seterror({
                     ...errors,
                     [e.target.name]:false
                  })
                  
             }
             
          
    }
const handlePassword=(e)=>{
    const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    if(password == "" || !password_pattern?.test(password)   ){
        seterror({
            ...errors,
            [e.target.name]: true
         })
         setEnable(true) 
     }
         else{
             seterror({
                 ...errors,
                 [e.target.name]:false
              })
         
         }
         
}

    
const handleSubmit=(e)=>{
    e.preventDefault();
    const res=data?.filter((ele,id)=>{
            return ele.email==email && ele.password==password 
    })
    setUserdata(res)
   console.log(res)
     if(res.length==0){
        alert("invalid credentials")
        setEmail('');
        setPassword('');
    }else{
        alert("login successfull")
        navigate('/service')
    }

}

  return (

    
<div className='register'>
        <h1>  Login Page      </h1>
        <form  onSubmit={handleSubmit}>
            
           
        <div>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder='enter Email Id' value={email}
                  onKeyUp={(e)=>handleEmail(e)} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div>
            {errors.email &&  <h5>Enter correct email</h5> }
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" value={password}   
                  onKeyUp={(e)=>handlePassword(e)} onChange={(e)=>setPassword(e.target.value)} required/>  
            </div>
            <div>
            {errors.password &&  <h5>Empty password not allowed</h5> }
            </div>
           
            <div>
                <button disabled={enable} >Sign In</button>
            </div>
            <div>
                <Link to='/register' style={{fontSize:"14px", color:"blue"}}>Click Here to Register</Link>
            </div>

        </form>
        
        
        
        </div>
  )
}

export default Login