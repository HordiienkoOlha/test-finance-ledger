// import person1Webp from "../images/team/person1.webp
// import person12Webp from "../images/team/person1@2x.webp";
import person1 from "../images/team/person1.jpg";
// import person12 from "../images/team/person1@2x.jpg";

// import person2Webp from "../images/team/person2.webp
// import person22Webp from "../images/team/person2@2x.webp";
import person2 from "../images/team/person2.jpg";
// import person22 from "../images/team/person2@2x.jpg";

// import person3Webp from "../images/team/person3.webp
// import person32Webp from "../images/team/person3@2x.webp";
import person3 from "../images/team/person3.jpg";
// import person32 from "../images/team/person3@2x.jpg";

const Team = () => {
  return (
    <section className="team section">
      <div className="team__content">
        <p className="team__pretitle">Who we are</p>
        <h2 className="team__title">Our Professional Team</h2>
        <p className="team__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <ul className="team__list container">
        <li className="team__item">
          <img src={person1} srcSet={`${person1} 300w`} alt="" />
          <div className="team__person">
            <h4 className="team__name">John Doe</h4>
            <p className="team__position">President</p>
          </div>
        </li>
        <li className="team__item">
          <img src={person2} srcSet={`${person2} 300w`} alt="" />
          <div className="team__person">
            <h4 className="team__name">Jane Doe</h4>
            <p className="team__position">Vice President</p>
          </div>
        </li>
        <li className="team__item">
          <img src={person3} srcSet={`${person3} 300w`} alt="" />
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
