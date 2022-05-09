import React from "react";
import { useNavigate } from "react-router-dom";

const ATCards = () => {
  const navigate = useNavigate();
  return (
    <div className="container px-4 mt-5">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light text-dark">
            <h5 className="text-center">Accounts</h5>
            <hr />
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-success mx-2" onClick={() => navigate('/createAccount')}>Add New Account</button>
              <button className="btn btn-outline-primary" onClick={() => navigate('/accounts')}>View All Accounts</button>
            </div>
            <hr />
            <div className="text-center">
              <h5>0</h5>
              <h5>Accounts</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light text-dark">
            <h5 className="text-center">Transactions</h5>
            <hr />
            <div className="text-center">
              <button className="btn btn-outline-primary mx-2" onClick={() => navigate('/transactions')}>View All Transactions</button>
            </div>
            <hr />
            <div className="text-center">
              <h5>0</h5>
              <h5>Transactions</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATCards;
