import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2> Hallo Welt ! </h2>
        <p>Wie gehts euch ?</p>
      </div>
    );
  }
}

export default hot(module)(App);