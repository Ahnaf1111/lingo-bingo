import React, { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const Gprovider = new GoogleAuthProvider();
  const GitProvider = new GithubAuthProvider();

  const googleSignUp = () => {
    return signInWithPopup(auth, Gprovider);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, GitProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const forgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useState(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    name: "ahnaf",
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    user,
    loading,
    googleSignUp,
    githubLogin,
    forgotPass,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
