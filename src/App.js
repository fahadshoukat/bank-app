import DisplayTimeAndDate from "./components/timeAndDate/DisplayTimeAndDate";
import NavBar from "./components/navbar/NavBar";
import ATCards from "./components/accountsAndTrans/ATCards";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App() {
  return (
    <>
      <DisplayTimeAndDate />
      <NavBar />
      <ATCards />
    </>
  );
}

export default App;
