import sprite from "../../images/sprite.svg";

const SocialIconsHover = () => {
  return (
    <>
      <ul className="iconsHover">
        <li className="iconsHover__link">
          <a lang="en" href="https://facebook.com/">
            <svg className="iconsHover__item" width="35" height="35">
              <use href={sprite + "#icon-facebook"} />
            </svg>
          </a>
        </li>
        <li className="iconsHover__link">
          <a lang="en" href="https://twitter.com/">
            <svg className="iconsHover__item" width="35" height="35">
              <use href={sprite + "#icon-twitter"} />
            </svg>
          </a>
        </li>
        <li className="iconsHover__link">
          <a lang="en" href="https://www.youtube.com/">
            <svg className="iconsHover__item" width="35" height="35">
              <use href={sprite + "#icon-youtube"} />
            </svg>
          </a>
        </li>
        <li className="iconsHover__link">
          <a lang="en" href="https://www.linkedin.com/">
            <svg className="iconsHover__item" width="35" height="35">
              <use href={sprite + "#icon-linkedin"} />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialIconsHover;
