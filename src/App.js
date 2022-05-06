import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayTimeAndDate from "./components/timeAndDate/DisplayTimeAndDate";
import NavBar from "./components/navbar/NavBar";
import ATCards from "./components/accountsAndTrans/ATCards";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateAccount from "./components/createAcount/CreateAccount";

function App() {
  return (
    <BrowserRouter>
        <DisplayTimeAndDate />
        <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
              <ATCards />
          }
        />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
