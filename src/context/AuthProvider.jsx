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


    // check for valid password
function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUpperCase) return "Password must include at least one uppercase letter.";
    if (!hasLowerCase) return "Password must include at least one lowercase letter.";
    if (!hasSpecialChar) return "Password must include at least one special character.";
    if (!hasMinLength) return "Password must be at least 6 characters long.";

    return null;
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
        validatePassword,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}


export default AuthProvider;