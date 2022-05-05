import React from 'react'

const Transactions = () => {
  return (
          <div className="card col-md-6 mt-4" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-12">
                <div className="card-body">
                  <h5 className="card-title text-center">Transactions</h5>
                  <hr />
                  <div className="text-center">
                      <button className="btn btn-primary mx-2">Add New Account</button>
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
  )
}

export default Transactions