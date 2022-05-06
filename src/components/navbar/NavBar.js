import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="row  bg-primary p-1">
      <div className="col">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="text-white">My Bank</h1>
          <div className="links">
            <Link to='/' className="text-decoration-none text-white">
              Dashboard
            </Link>
            <Link to="accounts" className="ml-2 text-decoration-none text-white">
              Accounts
            </Link>
            <Link to="transactions" className="text-decoration-none text-white">
              Transactions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
