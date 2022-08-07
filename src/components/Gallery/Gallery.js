import cases1Webp from "../../images/cases/cases1.webp";
import cases12Webp from "../../images/cases/cases1@2x.webp";
import cases1 from "../../images/cases/cases1.jpg";
import cases12 from "../../images/cases/cases1@2x.jpg";

import cases2Webp from "../../images/cases/cases2.webp";
import cases22Webp from "../../images/cases/cases2@2x.webp";
import cases2 from "../../images/cases/cases2.jpg";
import cases22 from "../../images/cases/cases2@2x.jpg";

import cases3Webp from "../../images/cases/cases3.webp";
import cases32Webp from "../../images/cases/cases3@2x.webp";
import cases3 from "../../images/cases/cases3.jpg";
import cases32 from "../../images/cases/cases3@2x.jpg";

import cases4Webp from "../../images/cases/cases4.webp";
import cases42Webp from "../../images/cases/cases4@2x.webp";
import cases4 from "../../images/cases/cases4.jpg";
import cases42 from "../../images/cases/cases4@2x.jpg";

import cases5Webp from "../../images/cases/cases5.webp";
import cases52Webp from "../../images/cases/cases5@2x.webp";
import cases5 from "../../images/cases/cases5.jpg";
import cases52 from "../../images/cases/cases5@2x.jpg";

import cases6Webp from "../../images/cases/cases6.webp";
import cases62Webp from "../../images/cases/cases6@2x.webp";
import cases6 from "../../images/cases/cases6.jpg";
import cases62 from "../../images/cases/cases6@2x.jpg";

const Gallery = () => {
  return (
    <ul className="gallery">
      <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases1Webp} 1x,
                  ${cases12Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases1} 1x,
                    ${cases12} 2x`}
          />
          <img src={cases1} alt="Group of people with laptops" />
        </picture>
      </li>
      <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases2Webp} 1x,
                  ${cases22Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases2} 1x,
                    ${cases22} 2x`}
          />
          <img src={cases2} alt="Working place on the table" />
        </picture>
      </li>
      <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases3Webp} 1x,
                  ${cases32Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases3} 1x,
                    ${cases32} 2x`}
          />
          <img src={cases3} alt="Handshake" />
        </picture>
      </li>
      <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases4Webp} 1x,
                  ${cases42Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases4} 1x,
                    ${cases42} 2x`}
          />
          <img src={cases4} alt="We are team" />
        </picture>
      </li>
      <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases5Webp} 1x,
                  ${cases52Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases5} 1x,
                    ${cases52} 2x`}
          />
          <img src={cases5} alt="Girl working" />
        </picture>
      </li>
      <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases6Webp} 1x,
                  ${cases62Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases6} 1x,
                    ${cases62} 2x`}
          />
          <img src={cases6} alt="A look at the sky near high-rise buildings" />
        </picture>
      </li>
      {/* <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases7Webp} 1x,
                  ${cases72Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases7} 1x,
                    ${cases72} 2x`}
          />
          <img src={cases7} alt="We are team" />
        </picture>
      </li>
      <li className="gallery__item">
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases8Webp} 1x,
                  ${cases82Webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 1200px)"
            srcSet={`
                    ${cases8} 1x,
                    ${cases82} 2x`}
          />
          <img src={cases8} alt="Happy employees" />
        </picture>
      </li> */}
    </ul>
  );
};
export default Gallery;
