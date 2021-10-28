import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged, createUserWithEmailAndPassword,
    updateProfile, sendEmailVerification
} from "firebase/auth";
initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const ClearError = () => {
        setTimeout(() => {
            setError("");
        }, 5000);
    };

    // clear error
    useEffect(() => {
        ClearError();
    }, [error]);

    //google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };


    //signInWithEmailAndPassword
    const signInWithEmail = (e) => {
        // setLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
            })
            // .finally(() => setLoading(false))
            .catch((err) => setError(err.message));
    };

    // sign out
    const logOut = () => {
        // setLoading(true);
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            // .finally(() => setLoading(false))
            .catch((err) => {

                setError(err.message);
            });

    };
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            // setLoading(false)
        });
        return () => unsubscribe;
    }, [user]);
    // get name
    const getName = (e) => {
        setName(e?.target?.value);
        console.log(e?.target?.value);
    };
    // get email
    const getEmail = (e) => {
        setEmail(e?.target?.value);
        console.log(e.target.value)
    };
    // get password
    const getPassword = (e) => {
        setPassword(e?.target?.value);
        console.log(e.target.value)
    };
    // signUp
    const signUpWithEmail = () => {

        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update name and email
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then((result) => { });
    };

    // sendVilifiedEmail
    function sendVilifiedEmail() {
        sendEmailVerification(auth.currentUser).then((result) => {
            alert(
                `Please verify your email, a verification email has been sent to ${email}`
            );
        });
    }



    return {
        signInWithGoogle, setUser, setError, user, error, logOut, signInWithEmail, getEmail, getPassword, getName, name, sendVilifiedEmail, setUserName, signUpWithEmail
    }

}
export default useFirebase;