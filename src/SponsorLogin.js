import React from 'react'
import { useState, useContext } from 'react';
import { DoesUserExist } from './services/firebaseServices';
import { useNavigate } from 'react-router-dom';
import "./SponsorLogin.css"
import { FirebaseContext } from './context/firebaseContext';
import { signInWithEmailAndPassword } from 'firebase/auth';


function SponsorLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("jeedu124@gmail.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
   
  const {auth} = useContext(FirebaseContext);
  
  const handleLogin = async (event) => {
    event.preventDefault();

    const usernameExist = DoesUserExist(email);
    if(usernameExist){
      try{
        const createdUser = await signInWithEmailAndPassword(auth,email, password);
        navigate("/sponsor/dashboard");
      }
      catch(error){
        setEmail("");
        setPassword("");
        setError(error.message);
      }
    }
  }

  handleLogin();

  return (
    <div>SponsorLogin</div>
  )
}


export default SponsorLogin