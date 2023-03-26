import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [form, setForm] = useState(false);

  const [trans, setTrans] = useState(
    JSON.parse(localStorage.getItem("trans"))
      ? JSON.parse(localStorage.getItem("trans"))
      : []
  );
  return (
    <AppContext.Provider value={{ balance, form, setForm, trans, setTrans }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
