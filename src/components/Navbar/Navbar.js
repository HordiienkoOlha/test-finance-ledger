import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../images/Vector.svg";

const Navbar = () => {
  const [scrollDown, setScrollDown] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
          <div className="logo" onClick={() => scrollToTop()}>
            <img className="logo__icon" src={logo} alt="Logo" />
            <div>
              <span className="logo__icon logo__icon--accent">Finance</span>
              <span className=" logo__icon logo__icon--light">Ledger</span>
            </div>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => scrollToTop()}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="cases"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                // id="cases"
              >
                Cases
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
