import React, { Component } from "react";
import * as firebase from "firebase";

function withFirebaseAuth(WrappedComponent, selectData) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: firebase.auth().currentUser
      };
    }
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
      });
    }
    render() {
      return <WrappedComponent user={this.state.user} {...this.props} />;
    }
  };
}

export default withFirebaseAuth;
