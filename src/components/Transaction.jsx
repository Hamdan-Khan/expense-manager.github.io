import React from "react";

const Transaction = ({ title, value, type }) => {
  return (
    <div
      className={`flex flex-row justify-between border border-zinc-400 rounded-md rounded-r-none border-r-4 py-1 px-2 ${
        type == "income" ? "border-r-green-600" : "border-r-red-600"
      }`}
    >
      <h3>{title}</h3>
      <p>${value}</p>
    </div>
  );
};

export default Transaction;
