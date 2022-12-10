import {app,db,auth} from '../lib/firebaseConfig';
import { doc, collection, addDoc,getDoc ,getDocs,setDoc,where, query} from 'firebase/firestore';

export const addSponsor = async (name,email) => {
    const res = await addDoc(collection(db, "sponsors"), {name,email});
    console.log(res);
}

export const addEvent = async (name,description,location,startDate,endDate) => {
    const res = await addDoc(collection(db, "events"), {name,description,location,startDate,endDate});
    console.log(res);
}


export async function get(){
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
}

export async function DoesUserExist(email) {
    const sponsorRef = collection(db, "sponsors");
    const snapshot = await query(sponsorRef, where("email", "==", email));
    console.log(snapshot)

    if (snapshot.empty) {
        return false;
    } else {
        return true;
    }
}