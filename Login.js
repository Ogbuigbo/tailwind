import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import "firebase/auth";
import { auth } from './config/fire';


function Login() {

  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signIn = e =>{
    e.preventDefault();


    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth =>{
      history('/')
    })
    .catch(error=> alert(error.message))
   
  }


    const register = e =>{
      e.preventDefault();

      auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) =>{
        if(auth){
          history('/')
        }
      })
      .catch(error=> alert(error.message))
    }


  return (
    <div className='login'>
        <div className='login__container'>
            <p className='login__title'>Login Your Account</p>
                
             <form>  
            <div className='login__email'>
            <p style={{padding:8}}>Email:</p>
            <input  style={{width:400, padding:10}}
             type='text' 
             value={email} 
             onChange={e => setEmail(e.target.value)}
             placeholder='email' />
            </div>

            <div className='login__password'> 
            <p style={{padding:8}}>Password:</p>
            <input style={{width:400, padding:10}}
            value={password} 
            onChange={e => setPassword(e.target.value)}
             type='password' placeholder='password' />
            </div>

            <div className='login__agreement'>
            <input type='checkbox' />
            <p style={{padding:10, fontSize: 15}}>By using this form you agree with the storage and handling of your data by this website.</p> 
            </div>

             <div> 
            <button onClick={signIn} type='submit' className='login__button'>SIGN IN</button>
            </div> 
            </form> 

            <div className='login__create'>
              <p className='login__title'>Don't Have An Account? Register Now !</p>
              <button onClick={register} className='login__button'>Register Now!</button>
            </div>
        </div>
    </div>
  )
}

export default Login