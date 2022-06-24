import {showUsers} from "./UI.js";
import {app} from "./firebase.js";
import {getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
  const auth = getAuth();
  
const fomrUser = document.getElementById('form')
window.addEventListener('DOMContentLoaded',()=>{
    const logout = document.getElementById('logout')

    logout.addEventListener('click',()=>{
        auth.signOut()
        .then(()=>{
            console.log('logout');
        });
    })

    onAuthStateChanged(auth,(user)=>{
        if(user){
          console.log('user login', user.email);
        }else{
            window.open('./login.html','_self')
        }
      });

    showUsers(); 
})

