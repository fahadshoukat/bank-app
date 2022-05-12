import React, { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    name: "",
    cnic: "",
    branchCode: "",
    accountNumber: "",
    accountType: "",
    deposit: "",
    date: "",
  });

  const [users, setUsers] = useState([]);
  const [isUsers, setIsUsers] = useState(false);
  const [transactions, setTransactions] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers, transactions, setTransactions, setInputs, inputs, isUsers, setIsUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
