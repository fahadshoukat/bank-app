import React, { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [isUsers, setIsUsers] = useState(false);
  const [transactions, setTransactions] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers, isUsers, setIsUsers, transactions, setTransactions }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
