import firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User from "./UserPage";
import React, { useEffect, useState } from "react";
import LoginPage from "./LoginPage";

var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const history = useHistory();
  useEffect(() => {
    if (firebase.auth().currentUser && firebase.auth().currentUser.uid) {
      setLoggedIn(true);
      // console.log(loggedIn);
      // history.push("/protected");
    }
  }, []);
  console.log(firebase.auth().currentUser);
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
        <Route path="/">
          {loggedIn ? <Redirect to="/protected" /> : <LoginPage />}
        </Route>
        <Route path="/protected">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
