import React from "react";

const Champ = ({ image, name, title }) => {
  return (
    <div className="champ">
      <img className="champ__image" alt={name} src={image} />
      <div className="champ__details">
        <h1 className="champ__name">{name}</h1>
        <p className="champ__title">{title}</p>
      </div>
    </div>
  );
};

export default Champ;
