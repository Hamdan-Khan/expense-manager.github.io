import React from "react";
import { useGlobalContext } from "../context/Context";

const Button = ({ children }) => {
  const { form, setForm } = useGlobalContext();
  return (
    <button
      onClick={() => setForm(!form)}
      className="bg-zinc-900 text-white rounded-md px-2 py-[0.16rem] font-medium"
    >
      {children}
    </button>
  );
};

export default Button;
