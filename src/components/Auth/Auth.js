import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth d-flex flex-column">
        <button className="btn btn-danger" onClick={this.loginClickEvent}>Log In With Google</button>
        <span>
          <img className="auth-image" src="https://fbcd.co/product-lg/723ed371d80e46ef7219a7301720a81c_resize.jpg" alt=""/>
        </span>
      </div>
    );
  }
}

export default Auth;
