import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useState, useEffect } from 'react';


const provider = new GoogleAuthProvider();
provider.addScope('email');
provider.addScope('profile'); 


function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    // gmail authentication
    async function authenticateWithGoogle() {
        setIsLoading(true);
        try {
            return await signInWithPopup(auth, provider)
        }
        finally {
            setIsLoading(false);
        }
    }



    // register with email
    async function registerWithEmailAndPassword(name, url, email, password) {
        setIsLoading(true);

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const currentUser = result.user;

            await updateProfile(currentUser, {
            displayName: name,
            photoURL: url,
            });
            return currentUser; 

        } catch (error) {
            console.log(error.message);
            throw error; 
        } finally {
            setIsLoading(false);
        }
    }



    // manual login
    async function loggingInVerifiedUser(email, password){
        setIsLoading(true);

        try {
            return await signInWithEmailAndPassword(auth, email, password);
        }
        finally {
            setIsLoading(false);
        }    
    }



    // logout user
    async function logoutUser() {
        try {
            const exitUser =  await signOut(auth);
            setUser(null);
            return exitUser;
        }
        finally {
            setIsLoading(false);
        }
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setIsLoading(true);

        try {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error("Auth state error:", err);
        } finally {
            setIsLoading(false);
        }
    });

    return () => unsubscribe();
    }, []);



    // auth_info
    const authInfo = {
        user,
        isLoading,
        authenticateWithGoogle,
        logoutUser,
        registerWithEmailAndPassword,
        loggingInVerifiedUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}


export default AuthProvider;