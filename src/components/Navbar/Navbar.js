import logo from "../../images/Vector.svg";

const Navbar = () => {
  return (
    <header>
      <div>
        <nav className="nav">
          <a className="logo" lang="en" href="./index.html">
            <img className="logo__icon" src={logo} alt="Logo" />
            <div>
              <span className="logo__icon logo__icon--accent">Finance</span>
              <span className=" logo__icon logo__icon--light">Ledger</span>
            </div>
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="./index.html">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="./index.html">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="./index.html">
                Cases
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="./index.html">
                Blog
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="./index.html">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
