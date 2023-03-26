import React, { useState } from "react";
import { useGlobalContext } from "../context/Context";
import Transaction from "./Transaction";

const TransactionSection = () => {
  const { trans, setTrans } = useGlobalContext();
  const [search, setSearch] = useState("");
  const filtered = trans.filter((x) =>
    x.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between pr-1">
        <h1 className="text-lg font-semibold">Transactions</h1>
        <span
          className={`material-symbols-outlined text-red-600 ${
            localStorage.getItem("trans")
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
          onClick={() => {
            localStorage.clear();
            setTrans([]);
          }}
        >
          delete
        </span>
      </div>
      <input
        type="text"
        className="bg-zinc-200 focus:outline-none px-2 py-1 rounded-xl mb-1"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-col gap-1 overflow-y-scroll max-h-[150px] pr-1 py-1">
        {filtered
          ? filtered.map((x) => {
              const { amount, description, type } = x;
              return (
                <Transaction
                  key={description}
                  title={description}
                  value={amount}
                  type={type}
                />
              );
            })
          : filtered.map((x) => {
              const { amount, description, type } = x;
              return (
                <Transaction
                  key={description}
                  title={description}
                  value={amount}
                  type={type}
                />
              );
            })}
      </div>
    </div>
  );
};

export default TransactionSection;
