import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Navigation from"./components/Navigation";
import Loginform from "./components/Loginform";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation/>
      <Loginform/>
    
    </div>
  );
}

export default App;
