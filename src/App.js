import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import Myname from "./components/MyName";
import Form from "./components/Form";
import Mycount from "./components/Mycount";
import Users from "./components/Users";
import Event from "./Event";
import Range from "./components/Range";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend developer" />
      <Title name="Mobile developer" />
      <Title name="Solidity developer" />
      <Myname/>
      <Form/>
      <Mycount/>
      <Users/>
      <Event/>
      <Event/>
      <Range/>
    </div>
  );
}

export default App;
