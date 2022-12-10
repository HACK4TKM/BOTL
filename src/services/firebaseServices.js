import { doc, collection, addDoc,getDoc ,getDocs,setDoc,where, query} from 'firebase/firestore';


export async function DoesUserExist(db,email) {
    const sponsorRef = collection(db, "users");
    const snapshot = await query(sponsorRef, where("email", "==", email));
    if (snapshot.empty) {
        return false;
    } else {
        return true;
    }
}

export async function UserSignedIn(auth) {
    const user = auth.currentUser;
    if (user) {
        return true;
    } else {
        return false;
    }
}