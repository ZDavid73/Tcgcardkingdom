import './NavBar.css';

function NavBar() {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src="https://www.cardkingdom.com/local/images/ck-header/ck-header-logo.png" className="app-logo" alt="logo" />
        <img src="https://www.cardkingdom.com/local/images/ck-header/ck-header-title.png" className="app-logo" alt="title" />
      </div>
      <div className="search-container">
        <div className="input-icon">
          <input type="text" placeholder="Search Card Kingdom" className="search-input rounded-pill" id="autocomplete" />
          <img src="https://www.cardkingdom.com/local/images/fontawesome/magnifying-glass-solid.svg" className="search-icon" alt="search" />
        </div>
      </div>
      <div className="action-buttons">
        <div className="action-item">
          <span>SIGN IN</span>
          <img src="https://www.cardkingdom.com/local/images/fontawesome/circle-user-solid.svg" alt="sign in" />
        </div>
        <div className="action-item">
          <span>❤</span>
        </div>
        <div className="action-item separator">
          <span>|</span>
        </div>
        <div className="action-item">
          <span>BUY</span>
          <img src="https://www.cardkingdom.com/local/images/fontawesome/cart-arrow-down-solid.svg" alt="buy" />
        </div>
        <div className="action-item">
          <span>SELL</span>
          <img src="https://www.cardkingdom.com/local/images/fontawesome/cart-arrow-up-solid.svg" alt="sell" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
