import React, { useContext } from 'react'
import ContextApi from './../context/ContextApi';
import { Link, useNavigate } from 'react-router-dom';
const Service = () => {
  const navigate=useNavigate()
    const {userdata,setUserdata} =useContext(ContextApi);
    console.log(userdata)


   

 
  return (
    <div className='service'>
<div className='home1'>
<div className='flex' >

<h1 style={{color:"white"}}>{userdata && userdata[0]?.name.toUpperCase() }  Welcome To  Our Website</h1>
<div className='span'>
{userdata && 
<>
<p style={{textDecoration:"underline",fontSize:"22px",textAlign:"center"}}>Your Login Details </p>
<Link to='/'> <span title='click here to logout'>Logout</span></Link>
</>
}
</div>
</div>
</div>
<div className='home1 serv'>
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