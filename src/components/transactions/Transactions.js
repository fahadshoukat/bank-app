import React from "react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4 p-4">
          <button className="btn btn-outline-danger" onClick={() => navigate('/')}>Dashboard</button>
          <hr />
          <h3 className="text-center">Transactions</h3>
          <h5 className="text-center">You don't have any transaction.</h5>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
