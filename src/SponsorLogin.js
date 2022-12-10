import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SponsorLogin.css";
import { FirebaseContext } from "./context/firebaseContext";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function SponsorLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { auth } = useContext(FirebaseContext);
  const isInvalid = password === "" || email === "";
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const createdUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/sponsor");
    } catch (error) {
      setEmail("");
      setPassword("");
      console.log("error", error);
      setError(error.message);
    }
  };

  return (
    <div className="sponsorlogin">
      <form className="form-container" onSubmit={handleLogin} method="POST">
        <p className="subtitle">{error}</p>
        <input
          aria-label="Enter your email address"
          type="text"
          placeholder="Email address"
          className="uname"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          required
        />
        <input
          aria-label="Enter your password"
          type="password"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          className="pass"
          required
        />
        <button type="submit" className={`submit`}>
          Submit
        </button>
      </form>
      <Link to="/sponsor/signup" style={{ textDecoration: "none" }}>
        <button type="button" className="btn sinup">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default SponsorLogin;
