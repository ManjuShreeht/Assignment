import React, { useEffect, useState } from 'react'
import '../styles/register.css'
import {Link,useNavigate} from 'react-router-dom'

const Register = () => {
       const navigate=useNavigate();
       const[name,setName]=useState('');
       const[userid,setUser]=useState('');
       const[email,setEmail]=useState('');
       const[password,setPassword]=useState('');
       const [mobile,setMobile]=useState('');

       const [enable,setEnable]=useState(true)
              const[errors,seterror]=useState({})
              
        const local=localStorage.getItem('RegisterData')
        const Alluser=local?JSON.parse(localStorage.getItem('RegisterData')):[];
        const[data,setData]=useState(Alluser)    
    useEffect(()=>{
    if(errors.name==false && errors.email==false && errors.mobile==false && errors.mobile==false && errors.userid==false
        && errors.password==false){
setEnable(false)
    }
    else{
        setEnable(true)  
    }

    })

    

    useEffect(()=>{
        localStorage.setItem('RegisterData',JSON.stringify(data));
    },[data])
    const handleName=(e)=>{
        // setName(e.target.value)
        
        const name_text=/^[A-za-z]+[A-Za-z0-9\s\-.]*$/
        if(name=="" || name?.length<4 || !name_text.test(name) ){
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

    const handleUser=(e)=>{
        const user_text=/^[A-za-z]+[A-Za-z0-9\S]*$/
           if(userid=="" || !user_text.test(userid) ){
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

    const handleEmail=(e)=>{
        const email_pattern=/^[a-z]+[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        if(email == "" || !email_pattern?.test(email)    ){
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

    const handleMobile=(e)=>{
    
    if(mobile == "" || mobile.length<10 || mobile.length>10 ){
        seterror({
            ...errors,
            [e.target.name]: true
         })
         setEnable(true)  
     }
         else if(mobile.length==10) {
             seterror({
                 ...errors,
                 [e.target.name]:false
              })
              
         }
        
    }



const handleValidation=(e)=>{
     e.preventDefault();
    const user={
        id:data.length+1,
        name:name,
        userid:userid,
        email:email,
        password:password,
        mobile:mobile
      
    };
    const res=data?.filter((ele,id)=>{
        return ele.email==email 
})
      if(res.length==0){
        setData(prev=>[...prev,user]);
        setPassword('');
    setName('')
    setUser('');
    setMobile('')
    setEnable(true);
    setTimeout(()=>{
        navigate('/login')
    },1000)
         }else{
    alert("User Already register please login")
    setEmail('');
         }

       
   
    
    
    // localStorage.setItem('RegisterData',JSON.stringify(data));
    
    

 
    
    
}
console.log(data)
 


// const validation=(value)=>{
//     let error={}
//     const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
   
//     if(value.userid==""  ){
//         error.userid="userid should not be empty"
//         setEnable(false)
//     }else{
//         setEnable(true)
//         error.userid=""
//     }

//     if(!email_pattern.test(value.email)){
//         error.email="Email "
//         setEnable(false)
//     }else{
//         error.email=""
//         setEnable(true)
//     }
//     if(validation.password==""){
//         error.password="passwrd not empty"
//         setEnable(false)
//     }else{
//         error.password=""
//         setEnable(true)
//     }
//     if(!password_pattern.test(value.password)){
//         error.password="passwrd should ne 1char"
//         setEnable(false)
//     }else{
//         error.password=""
//         setEnable(true)
//     }
//     if(value.mobile==""  ){
//         error.mobile="allowed only numbers"
//         setEnable(false)
//     }else{
//         error.mobile=""
//         setEnable(true)
//     }
//     if(error.name!=""  && error.userid!="" && error.email
//     && error.password=="" && error.mobile=="" ){
// setEnable(true);
// }else{
//     setEnable(false)
// }

//     return error;

// }

   
  return (
    <div className='register'>
        <h1>  Register Page      </h1>
        <form  autoCapitalize='off' onSubmit={(e)=>handleValidation(e)}>
            <div>

                <label for="Name">Name</label>
                <input type="text" id="Name" name="name" placeholder='enter name' value={name}
                onKeyUp={(e)=>handleName(e)} onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className='div1'>
                {errors.name &&  <h5>Name shoud be more than 4 characters</h5> }
             
            </div>
            <div>
                <label for="userid">User Id</label>
                <input type="text" id="userid" name="userid" placeholder='enter User Id' value={userid} 
                   onKeyUp={(e)=>handleUser(e)} onChange={(e)=> setUser((e.target.value).toLowerCase())} required/>
            </div>
            <div>
            {errors.userid &&  <h5>Enter User Id</h5> }
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder='enter Email Id' value={email}
                  onKeyUp={(e)=>handleEmail(e)} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div>
            {errors.email &&  <h5>Enter correct email address</h5> }
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" value={password}   
                  onKeyUp={(e)=>handlePassword(e)} onChange={(e)=>setPassword(e.target.value)} required/>  
            </div>
            <div>
            {errors.password &&  <h5>password should contain one capital, 1number,1symbol</h5> }
            </div>
            <div>
                <label for="mobile">Mobile</label>
                <input type='tel' id="mobile" name="mobile" placeholder='Enter Mobile Number' value={mobile} 
                  onKeyUp={(e)=>handleMobile(e)} onChange={(e)=> setMobile(e.target.value)}  required/>
            </div>
            <div>
            {errors.mobile &&  <h5>mobile number should be 10 numbers</h5> }
            </div>
            <div>
                <button disabled={enable} type='submit'>Sign Up</button>
            </div>
            <div>
                <Link to='/login' style={{fontSize:"14px", color:"blue"}}>Click Here to Login</Link>
            </div>

        </form>
        
        
        
        </div>
  )
}


export default Register