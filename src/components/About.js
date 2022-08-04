import people1 from "../images/home/people.webp";
import people2 from "../images/home/people@2x.webp";
import people3 from "../images/home/people.jpg";
// import people4 from "../images/home/people@2x.jpg";

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
          <li>{/* <pret */}</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
