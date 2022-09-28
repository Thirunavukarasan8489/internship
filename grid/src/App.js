import './App.css';
import { useState } from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Car from "./car";
import UserContext from './context';
import Form from './form';
// import Layout from './layout';
import Cont from './layout';
import Navbar1 from './navbar';

function App() {
  
  return (
    <HashRouter>
      <Navbar1/>
    <UserContext.Provider
    value={{
      users: [
        {
          name: "User",
          password: 8489
        },
      ]
    }}
    >
      <div className="container">
      <Routes>
        <Route path='/'  element={<Form/>} />
        <Route path='/layout' exact element={<Cont/>} />
      </Routes>
      </div>

     </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
