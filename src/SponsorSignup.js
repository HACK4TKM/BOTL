import React from 'react'
import { useState, useContext } from 'react';
import { DoesUserExist,isSponsor,UserSignedIn } from './services/firebaseServices';
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
    // event.preventDefault();
    console.log("email: ",email);
    const usernameExist = DoesUserExist(db,email);
      try{
        if (usernameExist){
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

            navigate("/sponsor/dashboard");}
        else{
            console.log("username already exists");
        }
      }
      catch(error){
        console.log("error",error);
        setEmail("");
        setPassword("");
        setCompanyName("");
        setError(error.message);
      }
    
  }


  return (
    <div>SponsorSignup</div>
  )
}


export default SponsorSignup