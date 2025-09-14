import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Melbin S</h1>
      <nav>
        <ul>
          <li><Link to="home" smooth duration={500}>Home</Link></li>
          <li><Link to="about" smooth duration={500}>About</Link></li>
          <li><Link to="projects" smooth duration={500}>Projects</Link></li>
          <li><Link to="certificates" smooth duration={500}>Certificates</Link></li>
          <li><Link to="contact" smooth duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
