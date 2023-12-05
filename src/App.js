import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Coke from "./Coke";
import DietPepsi from "./DietPepsi";
import Fanta from "./Fanta";
import MountainDew from "./MountainDew";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coke" element={<Coke />} />
          <Route path="/DietPepsi" element={<DietPepsi />} />
          <Route path="/Fanta" element={<Fanta />} />
          <Route path="/MountainDew" element={<MountainDew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
