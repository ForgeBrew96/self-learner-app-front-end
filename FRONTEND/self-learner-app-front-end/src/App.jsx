import './App.css'

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import InterestCat from "./components/InterestCat.jsx";
import EventSchedule from "./components/EventSchedule.jsx";
import Profile from "./components/Profile.jsx"
import Questionare from "./components/Questionare.jsx";
import NavBar from "./components/NavBar"
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
import * as authService from './service/authService.js'

const App = () => {
  const [user, setUser] = useState(authService.getUser())

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  }

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout}/>
      <Routes>
        {user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}

        <Route path='/signup' element={<SignupForm setUser={setUser}/>} /> 
        <Route path='/signin' element={<SigninForm setUser={setUser}/>} /> 
      </Routes>
    </>
  );
}

export default App

