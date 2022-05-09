import React from "react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4 p-4 bg-light text-dark">
          <button className="btn btn-outline-danger" onClick={() => navigate('/')}>Dashboard</button>
          <h3 className="text-center">Transactions</h3>
          <hr />
          <h5 className="text-center">You don't have any transaction.</h5>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
