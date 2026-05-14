import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARrzA5G8ukgmamhugjJJCzjoIa-GFrjnA",
  authDomain: "group-5-task-tracker.firebaseapp.com",
  projectId: "group-5-task-tracker",
  storageBucket: "group-5-task-tracker.firebasestorage.app",
  messagingSenderId: "183769509210",
  appId: "1:183769509210:web:97921ed0013e8a5501d763",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
