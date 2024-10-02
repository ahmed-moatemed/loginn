import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [action, setAction]=  useState('Login');
  const toggleAction = () => {
    setAction((prevAction) => (prevAction === 'Sign Up' ? 'Login' : 'Sign Up'));
  };
  return (
    <>
    <div className='container'>
      <div className='losg'>
        <h2>{action}</h2>
      </div>
      <div className='inputs'>
         {action === 'Sign Up' && (
            <div className='input'><input type="text" placeholder='Name' /></div>
          )}
        <div className='input'><input type="email" name="" id="" placeholder='Email' /></div>
        <div className='input'><input type="password" name="" id="" placeholder='Password' /></div>
      </div>
      {action === 'Login'?
          <div className='for'>
            <p>Forgot Pass?? <span>Click Here.</span></p>
          </div>:
          <div className='for'>
            
          </div>
        }
      <div className='buttons'>
      <button 
            onClick={() => setAction('Sign Up')} 
            disabled={action === 'Sign Up'}
          >
            Sign Up
          </button>
          <button 
            onClick={() => setAction('Login')} 
            disabled={action === 'Login'}
          >
            Login
          </button>
      </div>
    </div>
    </>
  )
}

export default App