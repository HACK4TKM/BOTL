import {app,db,auth} from '../lib/firebaseConfig';
import { doc, collection, addDoc,getDoc ,getDocs,setDoc} from 'firebase/firestore';

export const addSponsor = async (name,email) => {
    const res = await addDoc(collection(db, "sponsors"), {name,email});
    console.log(res);
}

export const addEvent = async (name,description,location,startDate,endDate) => {
    const res = await addDoc(collection(db, "events"), {name,description,location,startDate,endDate});
    console.log(res);
}
export async function add(){

    const citiesRef = collection(db, "cities");

    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
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
    const snapshot = await getDocs(doc(collection(db, "sponsors")));
    console.log(snapshot)

    if (snapshot.empty) {
        return false;
    } else {
        return true;
    }
}