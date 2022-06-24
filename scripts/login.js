import {app} from "./firebase.js";
import {getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";


window.addEventListener('DOMContentLoaded',()=>{   
const googleLogin = document.getElementById('google-login')
const login = document.getElementById('login')
const fooder = document.getElementById('fooder');
const auth = getAuth();
//mail login
login.addEventListener('click',(e)=>{
  e.preventDefault()
  const user = document.getElementById('user').value
  const password = document.getElementById('password').value

  console.log(user,password);
//login user
signInWithEmailAndPassword(auth,user,password)
.then((userCredential)=>{
  const user = userCredential.user;
  console.log('login',user);
  window.open('./index.html','_self')
})
.catch((error)=>{
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode,errorMessage);
  alert('no estas autorizado para entrar','error al iniciar sesion');
});
});


//auth state change
onAuthStateChanged(auth,(user)=>{
  if(user){
    console.log('user login', user.email);
  }else{
    fooder.innerText = 'INGRESA CON TU CUENTA, PARA COMENZAR';
  }
});


});