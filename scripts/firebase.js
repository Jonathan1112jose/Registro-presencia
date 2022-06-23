  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  import {getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc
  } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBRXJlqR5XvloWPJD7K7w260XCAltur2sg",
    authDomain: "db-test-498e4.firebaseapp.com",
    projectId: "db-test-498e4",
    storageBucket: "db-test-498e4.appspot.com",
    messagingSenderId: "241579002070",
    appId: "1:241579002070:web:91343c9e83c2da3d88e177"
  };


  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  //add register firebase
 export const saveTask = (name,mail,phone,privilege,address)=>{
    addDoc(collection(db,'user'),{name,mail,phone,privilege,address})
    console.log('submitted'); 
  }


  //CRUD register firebase 
  export const getUsers = ()=> getDocs(collection(db,'user'));
  export const ongetUsers = (callback)=> onSnapshot(collection(db,'user'),(callback))
  export const deleteUser = (id)=> deleteDoc(doc(db,'user',id))
  export const editUser = (id)=> getDoc(doc(db,'user',id))
  export const upDate = (id,newFiles) => updateDoc(doc(db,'user',id),newFiles)