import React from 'react';
import 'rsuite/lib/styles/index.less';
import Login from "./components/Login";
import { useState, useEffect } from 'react';
import fire from "./fire";
import Navigation from "./components/Nav";

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code){
          case "auth/invalid -email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case"auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });

  };
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener(); 
  },[])

  return(
    <div>
      {user ? (
         <Navigation handleLogOut={handleLogOut}/>
      ) : (
        <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
       />
      )}
    
      
    </div>
  );
}
export default App;