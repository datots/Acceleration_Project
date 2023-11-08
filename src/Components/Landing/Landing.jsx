import React from "react";
import classes from "./Landing.module.css";
import { useNavigate } from "react-router-dom";
import form from "../../assets/pngegg 1.png";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={form} className={classes.form} />
      <h1 className={classes.start}>Get Started Today</h1>
      <button className={classes.btn} onClick={() => navigate("/registration")}>
        Get Started
      </button>
    </div>
  );
};

export default Landing;
