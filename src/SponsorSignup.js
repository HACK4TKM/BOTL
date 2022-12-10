import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SponsorLogin.css"
import { FirebaseContext } from './context/firebaseContext';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


function SponsorSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");
    
  const {auth,db} = useContext(FirebaseContext);
  
  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log("email: ",email);
      try{
        const createdUser = await createUserWithEmailAndPassword(auth,email, password);
        await updateProfile(createdUser.user,{
            displayName: companyName,
        });

        const userRef = doc(db, "users", createdUser.user.uid);
        await setDoc(userRef, {
            uid : createdUser.user.uid,
            email: email,
            companyName: companyName,
            role: "sponsor",
        });
        console.log("createdUser: ",createdUser.user.displayName);

        navigate("/sponsor");}
      catch(error){
        console.log("error",error);
        setEmail("");
        setPassword("");
        setCompanyName("");
        setError(error.message);
      }
    
  }


  return (
    <div>
    <form className="form-container" onSubmit={handleSignUp} method='POST'>
          <p className="subtitle">{error}</p>
          <input
            aria-label='Enter your company name'
            type='text'
            placeholder='Company Name'
            className='uname'
            onChange={({ target }) => setCompanyName(target.value)}
            value={companyName}
            required
          />
          <input 
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="uname"              
              onChange={({ target }) => setEmail(target.value)}
              value={email}  required />
          <input aria-label="Enter password"
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              className="pass" required />
          <button type="submit" className={`submit`}>Submit</button>
    </form>    
    <Link to="/sponsor/login" style={{ textDecoration: "none" }}>
      <button type="button" className="btn">
        Sign in
      </button>
    </Link>
    </div>
  );
}



export default SponsorSignup