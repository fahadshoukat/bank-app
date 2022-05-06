import React from "react";
import { useNavigate } from "react-router-dom";

const Accounts = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4 p-4">
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-danger" onClick={() => navigate('/')}>Dashboard</button>
            <button className="btn btn-outline-danger" onClick={() => navigate('/createAccount')}>
              Create New Account
            </button>
          </div>
          <hr />
          <h3 className="text-center">Accounts</h3>
          <h5 className="text-center">You don't have any account</h5>
          <hr />
          <div className="text-center">
            <button className="btn btn-outline-success" onClick={() => navigate('/createAccount')}>
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
