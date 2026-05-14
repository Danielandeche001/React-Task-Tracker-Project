import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const tasksCollection = collection(db, "tasks");

function taskFromDocument(taskDocument) {
  return {
    id: taskDocument.id,
    ...taskDocument.data(),
  };
}

export async function getTasks() {
  const snapshot = await getDocs(tasksCollection);

  return snapshot.docs.map(taskFromDocument);
}

export async function createTask(task) {
  const documentReference = await addDoc(tasksCollection, task);

  return {
    id: documentReference.id,
    ...task,
  };
}

export async function updateTask(id, changes) {
  const taskReference = doc(db, "tasks", id);

  await updateDoc(taskReference, changes);

  return {
    id,
    ...changes,
  };
}

export async function deleteTask(id) {
  const taskReference = doc(db, "tasks", id);

  await deleteDoc(taskReference);
}
