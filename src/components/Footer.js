import facebook from "../images/social/facebook.svg";
import twitter from "../images/social/twitter.svg";
import youtube from "../images/social/youtube.svg";
import linkedin from "../images/social/linkedin.svg";

const Footer = () => {
  return (
    <>
      <ul>
        <li>
          <a lang="en" href="./index.html">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a lang="en" href="./index.html">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a lang="en" href="./index.html">
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li>
          <a lang="en" href="./index.html">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
      <p>Copyright © 2021 - FinanceLedger</p>
    </>
  );
};

export default Footer;
