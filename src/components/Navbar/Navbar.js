import { useEffect, useState } from "react";
import logo from "../../images/Vector.svg";

const Navbar = () => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrollDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [scrollDown]);
  return (
    <header
      className={
        scrollDown ? ["section__header--transparent"] : ["section__header"]
      }
      id="home"
    >
      <div>
        <nav className="nav">
          <a className="logo" lang="en" href="#home">
            <img className="logo__icon" src={logo} alt="Logo" />
            <div>
              <span className="logo__icon logo__icon--accent">Finance</span>
              <span className=" logo__icon logo__icon--light">Ledger</span>
            </div>
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#home">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#about">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#cases">
                Cases
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#contact">
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
