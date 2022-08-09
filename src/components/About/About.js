import people1 from "../../images/home/people.webp";
import people2 from "../../images/home/people@2x.webp";
import people3 from "../../images/home/people.jpg";
import people4 from "../../images/home/people@2x.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title visually-hidden">About</h2>
        <ul className="about__list">
          <li className="about__item about__photo">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${people1} 1x,
                  ${people2} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${people3} 1x,
                    ${people4} 2x`}
              />
              <img
                className="about__image"
                src={people3}
                alt="Group of people"
              />
            </picture>
          </li>
          <li className="about__item section about__item-indentation">
            <p className="about__pretitle">What you are looking for</p>
            <h3 className="about__nexttitle">We provide bespoke solutions</h3>
            <p className="about__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
            <button className="button about__button" type="button">
              Read More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
