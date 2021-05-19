import { logDOM } from "@testing-library/dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import { games } from "./data";

import logo from "./images/logo.png";

function App() {
  return (
    <Router>
      <div className="header">
        <h1>
          Project Diva
        </h1>
        <img src={logo}></img>
      </div>

      <a href="/songs">Songs</a>
      <a href="/modules">Modules</a>
      <a href="/games">Games</a>

      <Switch>
        <Route path="/songs">
          <Songs />
        </Route>
        <Route path="/modules">
          <Modules />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
      </Switch>
    </Router>

  );
}

function Songs() {
  return (
    <p>Here are songs</p>
  )
}

function Modules() {
  return (
    <p>Here are modules</p>
  )
}

function Games() {
  return (
    <>
    <p>Here are games</p>
    <div>
    {
      games.map((item)=>{
        let output = "";
        if (item.name.includes("Mirai")){
          output =`Hatsune Miku: Project ${item.name} for the ${item.platform}, released ${item.released}`;
        } else {
          output =`Hatsune Miku: Project DIVA ${item.name} for the ${item.platform}, released ${item.released}`;
        }
        return (
        <p>{output}</p>)}
        )
    }
    </div>
    </>
  )
}

export default App;
