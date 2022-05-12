import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayTimeAndDate from "./components/timeAndDate/DisplayTimeAndDate";
import NavBar from "./components/navbar/NavBar";
import ATCards from "./components/accountsAndTrans/ATCards";
import CreateAccount from "./components/createAcount/CreateAccount";
import Transactions from "./components/transactions/Transactions";
import { ToastContainer } from "react-toastify";
import Accounts from "./components/accounts/Accounts";
import ContextProvider from "./components/context/Context";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <DisplayTimeAndDate />
      <ContextProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<ATCards />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
