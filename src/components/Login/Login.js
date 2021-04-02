import React, { useContext } from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignInAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
      }
      
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);

        });
    }
    
    return (
        <div style={{textAlign:'center', height:'750px', width:'100%', backgroundColor:'powderblue'}}>
            <Navbar/>
            <br/><br/>
            <h1><FontAwesomeIcon icon={faLock}/> Sign in</h1>
            <br/><br/><br/><br/>
            <button onClick={handleGoogleSignIn} className= 'btn btn-secondary'> <FontAwesomeIcon icon={faSignInAlt}/> Google Sign In</button>
        </div>
    );
};

export default Login;