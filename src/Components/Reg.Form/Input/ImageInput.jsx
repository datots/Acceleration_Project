import React, { useState, useEffect } from "react";

const Image = ({ onImageValidation }) => {
  const [imageUpload, setImageUpload] = useState(
    localStorage.getItem("userImageUpload") || null
  );

  const [validImage, setValidImage] = useState(false);

  useEffect(() => {
    const storedImage = localStorage.getItem("ImageData");

    if (storedImage) {
      setImageUpload(storedImage);
      setValidImage(true);
    }
  }, []);

  const imageUploadhandler = (event) => {
    const image = event.target.files[0];

    if (image) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        setImageUpload(base64Image);
        setValidImage(true);
        localStorage.setItem("image Data", base64Image);
        onImageValidation(true);
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <div>
      <h2>Add a photo</h2>
      {imageUpload && (
        <img
          src={imageUpload}
          alt="Upload Image"
          style={{ width: "150px", borderRadius: "100%" }}
        />
      )}
      <input type="file" accept="image/" onChange={imageUploadhandler} />
      <div> {validImage ? "Image is valid" : "Image is required"} </div>
    </div>
  );
};

export default Image;
