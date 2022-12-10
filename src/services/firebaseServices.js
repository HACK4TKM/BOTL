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

export async function isSponsor(db,auth) {
    const user = auth.currentUser;
    if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            if(docSnap.data().role === "sponsor"){
                return true;
            }else{
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}