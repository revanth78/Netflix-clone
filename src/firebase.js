import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const firebaseConfig = {
  apiKey: "",
  authDomain: "netflix-clone-52da2.firebaseapp.com",
  projectId: "netflix-clone-52da2",
  storageBucket: "netflix-clone-52da2.firebasestorage.app",
  messagingSenderId: "596999212287",
  appId: "1:596999212287:web:b2169438e114dcea4210ca"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth)
}

export {auth, db, login, signup, logout}
