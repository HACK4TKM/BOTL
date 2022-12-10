import React from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SponsorLogin.css"
import { FirebaseContext } from './context/firebaseContext';
import { signInWithEmailAndPassword } from 'firebase/auth';


function SponsorLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   
  const {auth} = useContext(FirebaseContext);
  
  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const createdUser = await signInWithEmailAndPassword(auth,email, password);
      navigate("/sponsor/dashboard");
    }
    catch(error){
      setEmail("");
      setPassword("");
      console.log("error",error);
      setError(error.message);
    }
  }

  return (
    <div>SponsorLogin</div>
  )
}


export default SponsorLogin