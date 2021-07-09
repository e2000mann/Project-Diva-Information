import { logDOM } from "@testing-library/dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import React from 'react';
import './App.css';
import { games, songs } from "./data";

import logo from "./images/logo.png";

// custom functions

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// pages

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
    <>
    <p>Here are songs</p>
    <div>
    {
      songs.map((item)=>{
        let output = `${item.name}, sung by ${item.singer}, produced by ${item.producer}`;
        return (
        <p>{output}</p>)}
        )
    }
    </div>
    </>
  )
}

function Modules() {
  let query = useQuery();
  return (
    <>
      <p>Here are modules</p>

      <a href='/modules/?name=miku'>Miku</a>
      <a href='/modules/?name=rin'>Rin</a>
      <a href='/modules/?name=len'>Len</a>
      <a href='/modules/?name=luka'>Luka</a>
      <a href='/modules/?name=meiko'>Meiko</a>
      <a href='/modules/?name=kaito'>Kaito</a>
      <a href='/modules/?name=other'>Other</a>

      <ModuleList name={query.get("name")} />
    </>
  )
}

function ModuleList({name}){
  console.log(name);
  if (name != null){
    if (name != "other"){
      return (
        <p>Here are modules for {name}</p>
      )
    } else {
      return (
        <p>Here are modules for the other characters (Teto, Neru, Haku)</p>
      )
    }
  }
  return null
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
