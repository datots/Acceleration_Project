import React, { useState, useEffect } from "react";
import classes from "./Input.module.css";
const Input = ({ onNameValidation }) => {
  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [ValidName, setValidName] = useState(false);

  const nameHandler = (event) => {
    const newName = event.target.value;
    setName(newName);
    setValidName(newName.trim() !== "");
    localStorage.setItem("userName", newName);
    onNameValidation(newName.trim() !== "")
  };

  useEffect(() => {
    const storedname = localStorage.getItem("userName");
    if (storedname) {
      setName(storedname);
      setValidName(true);
    }
  }, []);

  return (
    <div>
      <p>fill in your name</p>
      <input
        type="text"
        placeholder="enter your name"
        onChange={nameHandler}
        value={name}
        className={classes.input}
      />
      <div>{ValidName ? "Name is Valid" : "Name is required"}</div>
    </div>
  );
};

export default Input;
