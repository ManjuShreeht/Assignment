import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    
    
  return (
    <div className='home'>
    <div className='home1'>
      <div className='flex'>

      <h1 style={{color:"white"}}>Welcome to the website</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam atque totam eos blanditiis nihil a quasi facilis esse, enim modi, quos dolorum perspiciatis doloribus! Eaque odit aliquid eveniet impedit iste, nisi eius dolorem dolorum accusantium iusto hic velit libero nam expedita voluptate accusamus commodi quia dolor quo officiis non!</p>
    </div>
    <div className='col'>

       <Link to='/login'>  <p>Login</p></Link>
       <Link to='/register'>  <p>Register</p></Link>
    </div>
    </div>
    </div>
  )
}

export default Home