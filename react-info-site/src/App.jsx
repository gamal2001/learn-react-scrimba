import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        <img className="nav-logo" src="../src/assets/react.svg" alt="react logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2023 Gamal Mohamed development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent/>
      <Footer />
    </>
  );
}

export default App;
