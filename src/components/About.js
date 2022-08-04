import people1 from "../images/home/people.webp";
import people2 from "../images/home/people@2x.webp";
import people3 from "../images/home/people.jpg";
// import people4 from "../images/home/people@2x.jpg";
import Button from "./Button";

const About = () => {
  return (
    <section>
      <div>
        <h2>About</h2>
        <ul>
          <li>
            {/* <picture>
              <source
                media="(min-width: 280px)"
                srcSet="     
            people1 1x,
            people2 2x
                    "
                type="image/webp"
              />
              <source
                media="(min-width: 280px)"
                srcSet="
                    people3 1x,
                    people4.jpg 2x
                    "
              />
              <img
                src={people3}
                alt="Group of people"
                // width="370"
                // height="294"
              />
            </picture> */}
            <img
              src={people1}
              srcSet={`${people1} 300w, ${people2} 768w, ${people3} 1280w`}
              // srcSet="
              // people1 1x,
              // people2 2x,
              // people3 1x,
              // people4 2x"
              alt="Group of people"
            />
          </li>
          <li>
            <h3>What you are looking for</h3>
            <h4>We provide bespoke solutions</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
          </li>
          <Button />
        </ul>
      </div>
    </section>
  );
};

export default About;
