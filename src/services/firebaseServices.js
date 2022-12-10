import { doc, collection,getDoc ,where, query, getCountFromServer, getDocs} from 'firebase/firestore';


export async function DoesUserExist(db,email) {
    const sponsorRef = collection(db, "users");
    const query_ = await query(sponsorRef, where("email", "==", email));
    const snapshot = await getCountFromServer(query_);
    console.log("snapshot",snapshot.data().count);
    if (snapshot.data().count<0) {
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

export async function isSponsor(db,user) {
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


export async function getEvents(db) {
    const result = await getDocs(collection(db, 'events')); 
  
    const events = result.docs.map((event) => ({
      ...event.data(),
      docId: event.id
    }));
  
    const eventList = await Promise.all(
      events.map(async (event) => {
        return {...event,};
      })
    );

    return eventList;
  }