// import cases1Webp from "../images/cases/cases1.webp";
// import cases12Webp from "../images/cases/cases1@2x.webp";
import cases1 from "../images/cases/cases1.jpg";
// import cases12 from "../images/cases/cases1@2x.jpg";

// import cases2Webp from "../images/cases/cases2.webp";
// import cases22Webp from "../images/cases/cases2@2x.webp";
import cases2 from "../images/cases/cases2.jpg";
// import cases22 from "../images/cases/cases2@2x.jpg";

// import cases3Webp from "../images/cases/cases3.webp";
// import cases32Webp from "../images/cases/cases3@2x.webp";
import cases3 from "../images/cases/cases3.jpg";
// import cases32 from "../images/cases/cases3@2x.jpg";

// import cases4Webp from "../images/cases/cases4.webp";
// import cases42Webp from "../images/cases/cases4@2x.webp";
import cases4 from "../images/cases/cases4.jpg";
// import cases42 from "../images/cases/cases4@2x.jpg";

// import cases5Webp from "../images/cases/cases5.webp";
// import cases52Webp from "../images/cases/cases5@2x.webp";
import cases5 from "../images/cases/cases5.jpg";
// import cases52 from "../images/cases/cases5@2x.jpg";

// import cases6Webp from "../images/cases/cases6.webp";
// import cases62Webp from "../images/cases/cases6@2x.webp";
import cases6 from "../images/cases/cases6.jpg";
// import cases62 from "../images/cases/cases6@2x.jpg";

// import cases7Webp from "../images/cases/cases7.webp";
// import cases72Webp from "../images/cases/cases7@2x.webp";
import cases7 from "../images/cases/cases7.jpg";
// import cases72 from "../images/cases/cases7@2x.jpg";

// import cases8Webp from "../images/cases/cases8.webp";
// import cases82Webp from "../images/cases/cases8@2x.webp";
import cases8 from "../images/cases/cases8.jpg";
// import cases82 from "../images/cases/cases8@2x.jpg";

const Gallery = () => {
  return (
    <ul>
      <li>
        <img src={cases1} srcSet={`${cases1} 300w`} alt="" />
      </li>
      <li>
        <img src={cases2} srcSet={`${cases2} 300w`} alt="" />
      </li>
      <li>
        <img src={cases3} srcSet={`${cases3} 300w`} alt="" />
      </li>
      <li>
        <img src={cases4} srcSet={`${cases4} 300w`} alt="" />
      </li>
      <li>
        <img src={cases5} srcSet={`${cases5} 300w`} alt="" />
      </li>
      <li>
        <img src={cases6} srcSet={`${cases6} 300w`} alt="" />
      </li>
      <li>
        <img src={cases7} srcSet={`${cases7} 300w`} alt="" />
      </li>
      <li>
        <img src={cases8} srcSet={`${cases8} 300w`} alt="" />
      </li>
    </ul>
  );
};
export default Gallery;
