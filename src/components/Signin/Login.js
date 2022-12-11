import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import firebaseConfig from "./../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handelSubmit = () => {
    if (!email && !password) {
      setErr("Fill the all detalils!");
    } else if (!email) {
      setErr("Enter Your Email ");
    } else if (!password) {
      setErr("Enter your Password");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 charactur");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setErr("");
          navigate("/");
          // ...
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/wrong-password") {
            setErr("Wrong Password");
          } else if (error.code == "auth/user-not-found") {
            setErr("Wrong email");
          }
        });
    }
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div id="signup">
      <div className="signup">
        <h2>Login your Account</h2>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your Password"
        />
        <p>{err}</p>
        <button onClick={handelSubmit}>Signup</button>
        <div>
          You have don't account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
