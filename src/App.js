

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom'
import Service from './components/Service';
import ContextApi from './context/ContextApi';
import { useState } from 'react';

function App() {
  const[userdata,setUserdata]=useState(null);
    
       
  return (
    <>
    <ContextApi.Provider value={{userdata,setUserdata}}>

    <Routes>
      <Route path='/' element={[<Home />]} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
   
    <Route path='/service' element={userdata?<Service/>:<Home /> } />
    
    
    
    </Routes>
    
    </ContextApi.Provider>
    </>
      
  );
}

export default App;
