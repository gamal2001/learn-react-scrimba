function Header() {
  return (
    <header>
      <nav>
        <img
          className="nav-logo"
          src="../src/assets/react.svg"
          alt="react logo"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
