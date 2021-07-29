import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import { serverTimestamp } from '../lib/firebase';

const CreateTodo = () => {
  const firestore = useFirestore();

  async function createTodo() {
    const res = await firestore.collection('todos').add({
      content: 'data',
      createdAt: serverTimestamp(),
    });
    console.log(res);
  }

  return <button onClick={createTodo}>Create Example Todo</button>;
};

export default CreateTodo;
