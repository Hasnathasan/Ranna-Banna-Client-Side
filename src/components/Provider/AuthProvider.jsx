import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signup = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signout = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
      };
    const gitLogin = () => {
    return signInWithPopup(auth, githubProvider)
    };
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
            setUser(loggedInUser)
        })
        return () => {
            unSubscribe()
        }
    },[])
    const authInfo = {signup, signout, login, googleLogin, gitLogin, user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;