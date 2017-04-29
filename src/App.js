import React, { Component } from "react";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import logo from "./logo.svg";
import "./App.css";
import AuthenticationButton from "./auth/AuthenticationButton";

if (module.hot) {
  require("preact/devtools");
}

const config = {
  apiKey: "AIzaSyB46-9EOLw_G68WnpyODa-2d8ShHUEY55w",
  authDomain: "celestrations.firebaseapp.com",
  databaseURL: "https://celestrations.firebaseio.com",
  projectId: "celestrations",
  storageBucket: "celestrations.appspot.com",
  messagingSenderId: "427753889270"
};

firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <AuthenticationButton />
        </p>
      </div>
    );
  }
}

export default App;
