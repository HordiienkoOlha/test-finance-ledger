import facebook from "../../images/social/facebook.svg";
import twitter from "../../images/social/twitter.svg";
import youtube from "../../images/social/youtube.svg";
import linkedin from "../../images/social/linkedin.svg";

const SocialIcons = () => {
  return (
    <>
      <ul className="icons">
        <li className="icons__item">
          <a lang="en" href="./index.html">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li className="icons__item">
          <a lang="en" href="./index.html">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li className="icons__item">
          <a lang="en" href="./index.html">
            <img src={youtube} alt="youtube" />
          </a>
        </li>
        <li className="icons__item">
          <a lang="en" href="./index.html">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialIcons;
