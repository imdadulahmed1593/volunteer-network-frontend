import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "./Login.css";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import { useHistory, useLocation } from "react-router-dom";
function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const location = useLocation();
  const [userinfo, setUserinfo] = useState(null);
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in...
        console.log(authUser);
        var { displayName, email } = authUser;
        console.log(displayName, email);
        dispatch({
          type: "SET_USER",
          user: {
            ...user,
            name: displayName,
            email: email,
          },
        });
        history.replace(from);
      } else {
        dispatch({
          type: "SET_USER",
          user: {},
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      // .then(function (result) {
      //   var token = result.credential.accessToken;
      //   // The signed-in user info.
      //   var { displayName, email } = result.user;
      //   console.log(displayName, email);
      //   dispatch({
      //     type: "SET_USER",
      //     user: {
      //       ...user,
      //       name: displayName,
      //       email: email,
      //     },
      //   });
      //   history.replace(from);
      //   // ...
      // })
      .catch(function (error) {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <img src={require("../../images/logos/mainlogo.png")} alt="" />
      <form>
        <h2>Login With</h2>
        <button onClick={handleSignIn} className="btn btn-light">
          Continue with Google
        </button>
        <p>
          Don't have an account ? <span>Create an account</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
