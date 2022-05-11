import React, { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState({
    name: "",
    cnic: "",
    branchCode: "",
    accountNumber: "",
    accountType: "",
    deposit: "",
    date: "",
  });

  const [isUsers, setIsUsers] = useState(false);

  return (
    <UserContext.Provider value={{ users, setUsers, isUsers, setIsUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
