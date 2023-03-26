import React from "react";

const Card = ({ title, value, type }) => {
  return (
    <div className="border border-zinc-400 p-3 rounded-xl flex-1">
      <h3 className="text-sm font-medium text-zinc-600">{title}</h3>
      <h1
        className={`${
          type == "primary" ? "text-green-600" : "text-red-600"
        } text-xl font-bold`}
      >
        ${value}
      </h1>
    </div>
  );
};

export default Card;
