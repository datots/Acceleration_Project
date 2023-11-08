import React from "react";
import { Link } from "react-router-dom";

const Popup = ({ onLogout, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Logout</h2>
        <p>Are you sure you want to log out?</p>
        <button onClick={onLogout}>Logout</button>
        <Link to="/" onClick={onClose}>
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default Popup;
