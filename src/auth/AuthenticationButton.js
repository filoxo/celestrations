import React, { Component } from "react";
import * as firebase from "firebase";
import withFirebaseAuth from "./withFirebaseAuth";

class AuthenticationButton extends Component {
  signIn = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(firebaseUser => {
        console.log("Successfully signed in:", firebaseUser);
      })
      .catch(error => {
        console.log("Failed to sign in:", error);
      });
  };
  signOut = () => {
    firebase.auth().signOut().catch(error => {
      console.log("Failed to sign out:", error);
    });
  };
  render() {
    if (this.props.user === null) {
      return <button type="button" onClick={this.signIn}>Sign in</button>;
    } else {
      const { displayName, uid } = this.props.user, name = displayName || uid;
      return (
        <span>
          <span>Signed in as {name}</span>
          <button type="button" onClick={this.signOut}>Sign out</button>
        </span>
      );
    }
  }
}

export default withFirebaseAuth(AuthenticationButton);
