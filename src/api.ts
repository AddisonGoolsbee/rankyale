import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const usersCollection = collection(db, "users");

export const addUser = async (netId: string) => {
    return await addDoc(usersCollection, { netId: netId });
};

export const getUsers = async () => {
    const snapshot = await getDocs(usersCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, netId: doc.data().netId as string }));
};
