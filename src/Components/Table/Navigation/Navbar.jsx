import React, { useState } from "react";
import Image from "../../Reg.Form/Input/ImageInput";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = ({ imageUpload, name }) => {
  const navigate = useNavigate();
  const [ispopupVisible, setPopUpVisible] = useState(false);

  const togglePopup = () => {
    setPopUpVisible(!ispopupVisible);
  };
  return (
    <nav className="navbar">
      <p>FORM</p>
      <p>
        <button onClick={() => navigate("/datafetcher")}>Press here to go to API page</button>
      </p>
      <p>{name}</p>
      <div className="image-container" onClick={togglePopup}>
        <img src={imageUpload} />
        {ispopupVisible && (
          <div className="popup">
            <button onClick={togglePopup}>Close</button>
            <button onClick={() => navigate("/landing")}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
