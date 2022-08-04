// import contactWebp from "../images/home/contact.webp;
// import contact2Webp from "../images/home/contact@2x.webp";
import contact from "../images/home/contact.jpg";
// import contact2 from "../images/home/contact@2x.jpg";

const Contact = () => {
  return (
    <>
      <img src={contact} srcSet={`${contact} 300w`} alt="" />
      <h2>Request Callback</h2>
    </>
  );
};

export default Contact;
