import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../Config/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // create user email and pass
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user email and pass

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }


    // logout
    const logOut = () => {
        return signOut(auth)
    }



    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         const userEmail = currentUser?.email || user?.email;
    //         const loggedUser = { email: userEmail }
    //         setUser(currentUser)
    //         if (currentUser) {
    //             axios.post("https://connect-job-681f5.web.app/jwt", loggedUser, { withCredentials: true })
    //                 .then(result => {
    //                     console.log(result.data);
    //                 })
    //         }
    //         setLoading(false)
    //     })
    //     return () => {
    //         unSubscribe()
    //     }
    // }, [user])



    useEffect(() => {
        const unscubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
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
        loading,
        profileUpdate,
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