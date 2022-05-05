import DisplayTimeAndDate from "./components/timeAndDate/DisplayTimeAndDate";
import NavBar from "./components/navbar/NavBar";
import Cards from "./components/cards/Cards";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";

function App() {
  return (
    <>
      <DisplayTimeAndDate />
      <NavBar />
      <Cards />
    </>
  );
}

export default App;
