import {app,db,auth} from '../lib/firebaseConfig';
import { doc, collection, addDoc,getDoc ,getDocs,setDoc,where, query} from 'firebase/firestore';


export async function DoesUserExist(email) {
    const sponsorRef = collection(db, "users");
    const snapshot = await query(sponsorRef, where("email", "==", email));
    if (snapshot.empty) {
        return false;
    } else {
        return true;
    }
}

export async function UserSignedIn() {
    const user = auth.currentUser;
    if (user) {
        return true;
    } else {
        return false;
    }
}