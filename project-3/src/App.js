import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Header} from './components/Header';
import {Watchlist}from './components/Watchlist';
import {Watched} from './components/Watched';
import {Add}  from "./components/Add";
import './App.css';
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
   <Router>
    <Header/>

    <Route>
      <Route exact path="/">
        <Watchlist />
      </Route>

      <Route path="/Watched">
        <Watched />
      </Route>

      <Route path="/add">
        <Add />
      </Route>
    </Route>
   </Router>
  );
}

export default App;
