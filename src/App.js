import React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Covid19 from './components/Covid/Covid19';
import Home from './components/Home/Home';
import MusicPage from "./components/MusicPage/MusicPage";

const App = () => (
  <div className="main-container" >
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home}/>
      <Route exact path="/blog" component={Posts} />
      <Route exact path="/music" component={MusicPage} />
      <Route exact path="/covid19" component={Covid19} />
    </Switch>
    {/* <Posts /> */}
  </div>
);

export default App;
