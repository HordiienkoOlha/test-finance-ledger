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
    <>
      <p>Who we are</p>
      <h2>Our Professional Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul>
        <li>
          <img src={person1} srcSet={`${person1} 300w`} alt="" />
          <h4>John Doe</h4>
          <p>President</p>
        </li>
        <li>
          <img src={person2} srcSet={`${person2} 300w`} alt="" />
          <h4>Jane Doe</h4>
          <p>Vice President</p>
        </li>
        <li>
          <img src={person3} srcSet={`${person3} 300w`} alt="" />
          <h4>Steve Smith</h4>
          <p>Marketing Head</p>
        </li>
      </ul>
    </>
  );
};

export default Team;
