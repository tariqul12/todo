import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import firebaseConfig from "./../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handelSubmit = () => {
    if (!name && !email && !password) {
      setErr("Fill the all detalils!");
    } else if (!name) {
      setErr("Enter Your Name!");
    } else if (!email) {
      setErr("Enter Your Email ");
    } else if (!password) {
      setErr("Enter your Password");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 charactur");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in\
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://th.bing.com/th/id/R.61d90d84534b510fcd3778198abef4a5?rik=CSpXISVZd1KSzQ&pid=ImgRaw&r=0&sres=1&sresct=1",
          }).then(() => {
            // Profile updated!
            setErr("");
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error.code);
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
        <h2>Create a Account</h2>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your Name"
        />
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
          You have an already account? <Link to="/Login"> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
