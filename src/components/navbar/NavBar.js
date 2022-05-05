import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="row  bg-primary p-1">
      <div className="col">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="text-white">My Bank</h1>
          <div className="links">
            <a href="#" className="text-decoration-none text-white">
              Dashboard
            </a>
            <a href="#" className="ml-2 text-decoration-none text-white">
              Accounts
            </a>
            <a href="#" className="text-decoration-none text-white">
              Transactions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
