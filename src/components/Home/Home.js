import React, { useState } from "react";
import "./Home.css";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const Home = () => {
  const [nodes, setNodes] = useState([
    {
      id: 1,
      text: "this is my first note",
      date: "09/12/2022",
      status: false,
    },
    {
      id: 2,
      text: "this is my first note",
      date: "09/12/2022",
      status: false,
    },
    {
      id: 3,
      text: "this is my first note",
      date: "09/12/2022",
      status: false,
    },
    {
      id: 4,
      text: "this is my first note",
      date: "09/12/2022",
      status: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [update, setUpdate] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  // const toggle = () => {
  //   setModal(!modal);
  // };
  const HandelLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.code);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(auth.currentUser);
    } else {
      // User is signed out
      navigate("/login");
    }
  });

  return (
    <>
      <div className="header text-center">
        <button className="log-out btn btn-danger" onClick={HandelLogout}>
          Log Out
        </button>
      </div>
      <div className="container">hear is todo list</div>
    </>
  );
};

export default Home;
