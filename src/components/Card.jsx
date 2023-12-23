import React from "react";

const Card = (props) => {
  return (
    <div className="rounded-2xl bg-white flex flex-col items-start p-4 max-w-60 drop-shadow-2xl">
      <span>{props.title}</span>
      <input type="number" />
    </div>
  );
};

export default Card;
