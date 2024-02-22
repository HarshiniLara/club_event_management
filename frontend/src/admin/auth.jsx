import app from '../db/config';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, } from "firebase/auth";
  

const signInWithEmail = async (email, password) => {
    const auth = getAuth(app);

    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        return {error: false, user: user};
    } 
    catch (e) {
        return {error: true, message: e.message};
    }
};

const forgotPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return {error: false}
    } 
    catch (e) {
        return {error: true, message: e.message}
    }
};

const signOut = async () => {
    try {
        const auth = getAuth();
        await auth.signOut();
        return {error: false}
    } catch (e) {
        return {error: true, message: e.message}
    }
  };
  
export {signOut, signInWithEmail, forgotPassword };