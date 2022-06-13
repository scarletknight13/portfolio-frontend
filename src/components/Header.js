import { Link } from "react-router-dom";
import '../styles/Header.css'
function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    backgroundColor: 'rgb(230, 25, 42)',
    display: "flex",
    height: "5vh",
    justifyContent: "space-around",
    padding: "8px",
    width: "100%",
    margin: "auto",
  };
  return (
    <header>
      <nav style={navStyle}>
        <a className="section-links" href="#Skills" >
          <div>SKILLS</div>
        </a>
        <a className="section-links" href="#about" >
          <div>ABOUT</div>
        </a>
        <a className="section-links" href="#projects" >
          <div>PROJECTS</div>
        </a>
      </nav>
    </header>
  );
}

export default Header;