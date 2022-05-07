import React, { useState } from "react";

const CreateAccount = () => {

  const [users, setUsers] = useState({});

  function handleSubmit(event){
    event.preventDefault();
    
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <form className="row g-0">
            <div className="bg-primary text-white p-3"> 
            <h3 className="text-center">Enter Account Details</h3>
            <p className="text-center m-0">All fields are required<span className="text-danger">*</span></p>
            </div>
            <div className="col-md-6 p-2">
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="col-md-6  p-2">
              <input
                type="number"
                className="form-control"
                id="validationDefault02"
                placeholder="Enter CNIC XXXXXXXXXXXXX"
                required
              />
            </div>
            <div className="col-md-6  p-2">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  placeholder="Enter Branch Code (1-99)"
                  min={1}
                  max={99}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                placeholder="Enter Account Number (Length must be 9)"
                size={9}
                required
              />
            </div>
            <div className="col-md-6 p-2">
              <select className="form-select" id="validationDefault04" required>
                <option defaultValue='Choose Account Type'>
                  Choose Account Type
                </option>
                <option>Current</option>
                <option>Saving</option>
              </select>
            </div>
            <div className="col-md-6 p-2">
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                placeholder="Initial Deposit(Minimum RS/500.)"
                required
              />
            </div>
            <div className="col-12 text-end p-2">
              <button onClick={handleSubmit} className="btn btn-success" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
