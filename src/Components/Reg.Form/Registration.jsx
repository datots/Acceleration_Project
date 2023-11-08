import React, { useState } from "react";
import Card from "./Input/Card/Card";
import Input from "./Input/Input";
import Image from "./Input/ImageInput";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [isValidName, setIsNameValid] = useState(false);
  const [isImageValid, setIsImagValid] = useState(false);

  const handleNameValidation = (isValid) => {
    setIsNameValid(isValid);
  };

  const handleImageValidation = (isValid) => {
    setIsImagValid(isValid);
  };

  const SignIn = isValidName && isImageValid;

  return (
    <Card>
      <h1>Get Started</h1>
      <Image onImageValidation={handleImageValidation} />
      <Input placeholder="your name" onNameValidation={handleNameValidation} />
      <button disabled={!SignIn} onClick={() => navigate("/form")}>
        Sign In
      </button>
    </Card>
  );
};

export default Registration;
