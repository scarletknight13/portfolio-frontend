import { Link } from "react-router-dom";
import Home from "../pages/Home";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
  return(
      <header>
          <h1>My Portfolio Page</h1>
          <nav style={navStyle}>
              <Link to='/'>
                  <div>Home</div>
              </Link>
              <Link to='/about'>
                  <div>ABOUT</div>
              </Link>
              <Link to='/projects'>
                <div>PROJECTS</div>
              </Link>
          </nav>
      </header>
  )
}
export default Header;