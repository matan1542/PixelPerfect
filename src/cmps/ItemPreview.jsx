import React from "react";

export function ItemPreview({ item }) {
  return (
    <div className="item-preview flex">
      <div className="img-preview-container">
        <img src="imgs/Oval.png" alt="img" />
        <img src={item.src} alt="img" className="img-preview"/>
      </div>
      <div className="preview-content flex column">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
      </div>
    </div>
  );
}
