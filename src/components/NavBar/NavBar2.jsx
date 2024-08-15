import './NavBar2.css';

function NavBar2() {
  return (
    <nav className="navbar2">
      <ul className="navbar2-links">
        <li><a href="#magic">MAGIC: THE GATHERING</a></li>
        <li><a href="#supplies">SUPPLIES</a></li>
        <li><a href="#learn">LEARN & COMMUNITY</a></li>
      </ul>
      <button className="sell-button">SELL US YOUR CARDS!</button>
    </nav>
  );
}

export default NavBar2;
