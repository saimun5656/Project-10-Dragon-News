import React, { createContext,  useEffect,  useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth=getAuth(app);
export const AuthContext = createContext('');

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('');
    useEffect(()=>{
        onAuthStateChanged(auth,(curUser)=>{
             setUser(curUser)
        })
    },[])
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const authinfo={
        user,
        createUser,
        loginWithEmail,
        logOut
    }
    return (
       <AuthContext.Provider value={authinfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;