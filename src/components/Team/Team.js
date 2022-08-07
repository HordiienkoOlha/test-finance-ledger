import person1Webp from "../../images/team/person1.webp";
import person12Webp from "../../images/team/person1@2x.webp";
import person1 from "../../images/team/person1.jpg";
import person12 from "../../images/team/person1@2x.jpg";

import person2Webp from "../../images/team/person2.webp";
import person22Webp from "../../images/team/person2@2x.webp";
import person2 from "../../images/team/person2.jpg";
import person22 from "../../images/team/person2@2x.jpg";

import person3Webp from "../../images/team/person3.webp";
import person32Webp from "../../images/team/person3@2x.webp";
import person3 from "../../images/team/person3.jpg";
import person32 from "../../images/team/person3@2x.jpg";
import SocialIconsHover from "../SocialIconsHover/SocialIconsHover";

const Team = () => {
  return (
    <section className="team">
      <div className="team__content">
        <p className="team__pretitle">Who we are</p>
        <h2 className="team__title">Our Professional Team</h2>
        <p className="team__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <ul className="team__list">
        <li className="team__item">
          <div className="team__frame">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${person1Webp} 1x,
                  ${person12Webp} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${person1} 1x,
                    ${person12} 2x`}
              />
              <img src={person1} alt="John Doe" />
            </picture>
            <div className="team__overlay">
              <SocialIconsHover />
            </div>
          </div>
          <div className="team__person">
            <h3 className="team__name">John Doe</h3>
            <p className="team__position">President</p>
          </div>
        </li>

        <li className="team__item">
          <div className="team__frame">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${person2Webp} 1x,
                  ${person22Webp} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${person2} 1x,
                    ${person22} 2x`}
              />
              <img src={person2} alt="Jane Doe" />
            </picture>
            <div className="team__overlay">
              <SocialIconsHover />
            </div>
          </div>
          <div className="team__person">
            <h4 className="team__name">Jane Doe</h4>
            <p className="team__position">Vice President</p>
          </div>
        </li>

        <li className="team__item">
          <div className="team__frame">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${person3Webp} 1x,
                  ${person32Webp} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${person3} 1x,
                    ${person32} 2x`}
              />
              <img src={person3} alt="Steve Smith" />
            </picture>
            <div className="team__overlay">
              <SocialIconsHover />
            </div>
          </div>
          <div className="team__person">
            <h4 className="team__name">Steve Smith</h4>
            <p className="team__position">Marketing Head</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Team;
