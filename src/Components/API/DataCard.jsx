// DataCard.js
import React from "react";
import "./DataCard.css";

const DataCard = ({ post }) => {
  return (
    <div className="">
      <div className="data-card">
        <h4>{post.id}</h4>
        <h5 className="data-card-title">{post.title}</h5>
        <p className="data-card-body">{post.body}</p>
        <h3>{post.userId}</h3>
      </div>
    </div>
  );
};

export default DataCard;
