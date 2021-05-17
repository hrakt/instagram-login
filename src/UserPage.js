import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { Link, useHistory, Redirect, withRouter } from "react-router-dom";

function UserPage({}) {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (firebase.auth().currentUser) {
      setUser(firebase.auth().currentUser);
      setLoaded(true);
    } else {
      history.replace("/");
      setLoaded(false);
    }
  }, []);

  const logout = async () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser(null);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {user && user.email}
      <button onClick={logout}>
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
}

export default withRouter(UserPage);
