import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading,setLoading] = useState(true);

  const userSignup = async (email, password) => {
    setLoading(true)
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = async (email, password) => {
    setLoading(true)
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = async () => {
    setLoading(true)
    return await signOut(auth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
    //   console.log(user);
      setUsers(user);
      setLoading(false)
    });

    return () => subscribe();
  }, []);
  const authInfo = {
    users,
    userSignup,
    userLogin,
    userSignOut,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
