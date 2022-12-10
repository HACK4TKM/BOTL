import "./App.css";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useContext } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import Protected from "./helper/Protected";
import SponDash from "./SponDash";
import SponsorLogin from "./SponsorLogin";
import SponsorSignup from "./SponsorSignup";


function App() { 
  const {auth} = useContext(FirebaseContext);
return (
  <div className="App">
    <div className="app-body">
      <BrowserRouter>
      <Routes>
        <Route index element = {<Main />} />
        <Route path="/sponsor/login" element={<SponsorLogin />} />
        <Route path="/sponsor/signup" element={<SponsorSignup />} />
        <Route path="/sponsor">
          <Route index element={<Protected user={auth.currentUser}><SponDash/></Protected>} />
        </Route>
        <Route path="/event-manager" >
          <Route index element={<Protected user={auth.currentUser}><EventMan /></Protected>} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);
}

export default App;
