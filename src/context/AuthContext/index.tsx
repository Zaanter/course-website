import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { FirebaseError } from 'firebase/app';

interface AuthContextType {
    user: any;
    emailSignIn: (email: string, password:string, callback: VoidFunction, errorCallback:Function) => void;
    emailSignUp: (email:string, password:string, callback:VoidFunction, errorCallback:Function) => void;
    signout: (callback: VoidFunction) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider = (props:any): JSX.Element => {
    let [user, setUser] = useState<any>(props.auth);
    
    let emailSignIn = async (email: string,password:string, callback: VoidFunction, errorCallback:Function) => {
        return await signInWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
        setUser(userCredential.user);
        callback();
        }).catch((error:FirebaseError) =>{
            errorCallback(error)
        });
    };

    let emailSignUp = async (email: string, password: string, callback: VoidFunction, errorCallback:Function) => {
        return await createUserWithEmailAndPassword(getAuth(), email, password).then((userCredentials) => {
            setUser(userCredentials.user);
            callback()
        }).catch((error:FirebaseError) => {
            errorCallback(error)
        });
    }

    let signout = async (callback: VoidFunction) => {
        return await signOut(getAuth()).then(() => {
        setUser(null);
        callback();
        });
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            setUser(user)
        })

        return () => {
            unsubscribe()
        }
    })

    let value = { user, emailSignIn, signout, emailSignUp };
   
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
    
};