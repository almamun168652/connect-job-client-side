import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../Config/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create user email and pass
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user email and pass

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // logout
    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unscubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unscubscribe();
        };
      }, []);


    const authInfo = {
        googleLogin,
        createUser,
        signInUser,
        user,
        logOut,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;