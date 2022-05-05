import React from "react";

const Accounts = () => {
  return (
          <div className="card col-md-6 mt-4" style={{ maxWidth: "540px" }}>
            <div className="row">
              <div className="col">
                <div className="card-body">
                  <h5 className="card-title text-center">Accounts</h5>
                  <hr />
                  <div className="d-flex justify-content-center">
                      <button className="btn btn-success mx-2">Add New Account</button>
                      <button className="btn btn-primary">View All Accounts</button>
                  </div>
                  <hr />
                  <div className="text-center">
                      <h5>0</h5>
                      <h5>Accounts</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Accounts;
