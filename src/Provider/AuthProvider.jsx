import React, { useEffect } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContex";
import { useState } from "react";
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  

  //register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //signin with Email and Password
  const signInwithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //signIn With google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  //sighOut

  const signOuts = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe;
    };
  });

  const AuthInfo = {
    createUser,
    signInwithEmail,
    signInWithGoogle,
    signOuts,
    user,
  };

  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
