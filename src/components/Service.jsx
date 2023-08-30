import React, { useContext } from 'react'
import ContextApi from './../context/ContextApi';
const Service = () => {
    const {userdata,setUserdata} =useContext(ContextApi);
    console.log(userdata)


   

 
  return (
    <div className='service'>
<div className='home1'>
<div className='flex' >

<h1 style={{color:"white"}}>{userdata && userdata[0]?.name}  Welcome To  Our Website</h1>
<p style={{textDecoration:"underline",fontSize:"22px",textAlign:"center"}}>Your Login Details</p>
</div>
</div>
<div className='serv'>
    {
    userdata &&
    <>
    <p > Name :  {userdata && userdata[0]?.name}</p>
    <p> UserId :  {userdata && userdata[0]?.userid}</p>
   <p>Email :    {userdata && userdata[0]?.email}</p> 
   <p>Mobile :    {userdata && userdata[0]?.mobile}</p>
    </>
    }
    
</div>

    </div>
  )
}

export default Service