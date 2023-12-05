import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coke">Coke</Link>
          </li>
          <li>
            <Link to="/DietPepsi">DietPepsi</Link>
          </li>
          <li>
            <Link to="/Fanta">Fanta</Link>
          </li>
          <li>
            <Link to="/MountainDew">MountainDew</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
