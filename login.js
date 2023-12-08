import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app'; //update the import statement
import 'firebase/compat/auth';

import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDzcv_tVKEwup1uc6Xt6s68LpCD12HyA5w",
    authDomain: "logingrupito15601-66919.firebaseapp.com",
    projectId: "logingrupito15601-66919",
    storageBucket: "logingrupito15601-66919.appspot.com",
    messagingSenderId: "685771353811",
    appId: "1:685771353811:web:c0fbce3019e8df5c06ae26"
  };


  const app = initializeApp(firebaseConfig);

  const Login =() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(!firebase.apps.length){
            initializeApp(firebaseConfig);
        }
    },[]);

    const handleLogin = async()=>{
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            alert('Bienvenido');
            console.log('Inicio de Sesion exitoso:', response.user);

        } catch (error){
            alert('Usuario y/o contraseña invalidos');
            console.error('Error durante el inicio de sesion:', error.message);
        }
    };
    return(
        <div>
            <h2>Login</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <label>password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
  };

  export default Login;