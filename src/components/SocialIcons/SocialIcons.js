import sprite from "../../images/sprite.svg";

const SocialIcons = () => {
  return (
    <>
      <ul className="icons">
        <li className="icons__link">
          <a lang="en" href="./index.html">
            <svg className="icons__item" width="35" height="35">
              <use href={sprite + "#icon-facebook"} />
            </svg>
          </a>
        </li>
        <li className="icons__link">
          <a lang="en" href="./index.html">
            <svg className="icons__item" width="35" height="35">
              <use href={sprite + "#icon-twitter"} />
            </svg>
          </a>
        </li>
        <li className="icons__link">
          <a lang="en" href="./index.html">
            <svg className="icons__item" width="35" height="35">
              <use href={sprite + "#icon-youtube"} />
            </svg>
          </a>
        </li>
        <li className="icons__link">
          <a lang="en" href="./index.html">
            <svg className="icons__item" width="35" height="35">
              <use href={sprite + "#icon-linkedin"} />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialIcons;
