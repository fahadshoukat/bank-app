import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {

  const navigate = useNavigate();

  const [users, setUsers] = useState({
    name: '', cnic: Number(''), branchCode: '', accountNumber: '', accountType: '', deposit: '',
  });

  let name, value

  function handleInputs(e){
    name = e.target.name
    value = e.target.value
    setUsers({...users, [name]: value})
  }
  function handleSubmit(e){
    e.preventDefault();
    navigate('/accounts');
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <form className="row" onSubmit={handleSubmit}>
            <div className="bg-primary text-white p-3"> 
            <h3 className="text-center">Enter Account Details</h3>
            <p className="text-center m-0">All fields are required<span className="text-danger">*</span></p>
            </div>
            <div className="col-md-6 p-2">
              <input
                type="text"
                name="name"
                value={users.name}
                onChange={handleInputs}
                className="form-control"
                id="validationDefault01"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="col-md-6  p-2">
              <input
                type="number"
                name="cnic"
                value={users.cnic}
                onChange={handleInputs}
                className="form-control"
                id="validationDefault02"
                placeholder="Enter CNIC without dashes"
                minLength='13'
                maxLength='13'
                required
              />
            </div>
            <div className="col-md-6  p-2">
              <div className="input-group">
                <input
                  type="number"
                  name="branchCode"
                  value={users.branchCode}
                  onChange={handleInputs}
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
                type="number"
                name="accountNumber"
                value={users.accountNumber}
                onChange={handleInputs}
                className="form-control"
                id="validationDefault03"
                placeholder="Account Number (Length must be 9)"
                minLength='9'
                maxLength='9'
                required
              />
            </div>
            <div className="col-md-6 p-2">
              <select className="form-select" id="validationDefault04" 
              name="accountType"
              value={users.accountType}
              onChange={handleInputs}
              required>
                <option defaultValue='Choose Account Type'>
                  Choose Account Type
                </option>
                <option>Current</option>
                <option>Saving</option>
              </select>
            </div>
            <div className="col-md-6 p-2">
              <input
                type="number"
                name="deposit"
                value={users.deposit}
                onChange={handleInputs}
                className="form-control"
                id="validationDefault05"
                placeholder="Initial Deposit(Minimum RS/500.)"
                required
              />
            </div>
            <div className="col-12 text-end p-2">
              <button className="btn btn-success" type="submit">
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
