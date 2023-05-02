import React, { createContext,  useContext,  useEffect,  useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth=getAuth(app);
export const AuthContext = createContext('');

const AuthProvider = ({children}) => {
    const [loader,setLoader]=useState(true)
    const [user,setUser]=useState('');
    useEffect(()=>{
        onAuthStateChanged(auth,(curUser)=>{
             setUser(curUser)
             setLoader(false)
        })
    },[])
    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmail=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
       
        return signOut(auth)
    }
    const authinfo={
        user,
        createUser,
        loginWithEmail,
        logOut,
        loader
    }
    return (
       <AuthContext.Provider value={authinfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;