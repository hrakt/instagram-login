import firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
} from "react-router-dom";
import UserPage from "./UserPage";
import SignupPage from "./SignupPage";
import React, { useEffect, useState } from "react";
import LoginPage from "./LoginPage";

var firebaseConfig = {
  apiKey: "AIzaSyAEy-j5TRqiWEhfHxrjkYIo3Kj3uIpwqWs",
  authDomain: "instagram-login-b5430.firebaseapp.com",
  projectId: "instagram-login-b5430",
  storageBucket: "instagram-login-b5430.appspot.com",
  messagingSenderId: "82928981879",
  appId: "1:82928981879:web:5477d71a4e5c31892db372",
  measurementId: "G-35KM1H10MV",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(false);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
        setUser(firebase.auth().currentUser);
      }
    });
  }, []);
  return (
    <Router>
      {/* <div className={styles.app}>
        <Phone />

        <div className={styles.right}>
          <LoginBox />
          <SignupBox />
        </div>
      </div> */}
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/protected" /> : <LoginPage />}
        </Route>
        <Route exact path="/protected">
          <UserPage />
        </Route>
        <Route exact path="/signup">
          {loggedIn ? <Redirect to="/protected" /> : <SignupPage />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
