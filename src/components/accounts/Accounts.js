import React from "react";
import { useNavigate } from "react-router-dom";

const Accounts = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4 p-4 bg-light text-dark">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr className="bg-primary text-light">
                  <th>Branch Code</th>
                  <th>Account #</th>
                  <th>Name</th>
                  <th>Registered</th>
                  <th>Type</th>
                  <th>Balance</th>
                </tr>
              </thead>
            </table>
          </div>
          {/* <div className="d-flex justify-content-between">
            <button className="btn btn-outline-danger" onClick={() => navigate('/')}>Dashboard</button>
            <button className="btn btn-outline-danger" onClick={() => navigate('/createAccount')}>
              Create New Account
            </button>
          </div>
          <h3 className="text-center">Accounts</h3>
          <hr />
          <h5 className="text-center">You don't have any account</h5>
          <div className="text-center">
            <button className="btn btn-outline-success" onClick={() => navigate('/createAccount')}>
              Create New Account
            </button>
          </div>
          <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
