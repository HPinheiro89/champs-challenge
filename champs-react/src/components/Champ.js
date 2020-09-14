import React from "react";

const Champ = ({ image, name }) => {
  return (
    <div className="champ">
      <img className="champ__image" alt={name} src={image} />
      <div className="champ__details">
        <h1 className="champ__title">{name}</h1>
      </div>
    </div>
  );
};

export default Champ;
