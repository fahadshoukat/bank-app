import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";

const Transactions = () => {
    const navigate = useNavigate();
    const {transactions, isUsers} = useContext(UserContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4 p-4 bg-light text-dark">
          <button className="btn btn-outline-danger" onClick={() => navigate('/')}>Dashboard</button>
          <h3 className="text-center">Transactions</h3>
{isUsers ?
          <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr className="bg-primary text-light">
                    <th>TransactionID</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Account #</th>
                    <th>Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => {
                    return (
                      <tr key={index}>
                        <td>{transaction.transactionID}</td>
                        <td>{transaction.time}</td>
                        <td>{transaction.date}</td>
                        <td>{transaction.accountNo}</td>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
          </div> :
          <>
          <hr />
          <h5 className="text-center">You don't have any transaction.</h5>
          <hr />
          </>
}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
