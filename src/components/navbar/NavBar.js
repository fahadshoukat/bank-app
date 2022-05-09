import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row bg-primary">
      <div className="col">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <h3 className="text-white">My Bank</h3>
          <div className="links">
            <Link to='/' className="px-3 text-decoration-none text-white p-0">
              Dashboard
            </Link>
            <Link to="accounts" className="px-3 text-decoration-none text-white p-0">
              Accounts
            </Link>
            <Link to="transactions" className="px-3 text-decoration-none text-white p-0">
              Transactions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
