import React from "react";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Agents from "./components/Agents/Agents";
import SignUp from "./components/User/SignUp/Signup"
import Signin from "./components/User/SignIn/Signin";
import PassReset from "./components/User/SignIn/PassReset";
import Properties from "./components/Properties/Properties";
import PropertyList from "./components/Properties/PropertyList/PropertyList";
import PropertyDetails from "./components/Properties/PropertyDeails/PropertyDetails";
import UserProperties from "./components/User/UserProperties/UserProperties";


const App = () => {
  
  return (
    <>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Agents" element={<Agents />} />
      <Route path="/Properties" element={<Properties />} />
      <Route path="/NewProperty" element={<PropertyList />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<Signin />} />
      <Route path="/MyProperties" element={<UserProperties />} />
      <Route path="/PasswordReset" element={<PassReset />} />
      <Route path="/Property/:id" element={<PropertyDetails />} />
      </Routes>
      
    </>
  );
};

export default App;
