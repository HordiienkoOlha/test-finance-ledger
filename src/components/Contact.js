// import contactWebp from "../images/home/contact.webp;
// import contact2Webp from "../images/home/contact@2x.webp";
import contact from "../images/home/contact.jpg";
// import contact2 from "../images/home/contact@2x.jpg";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="contact">
      <img src={contact} srcSet={`${contact} 300w`} alt="" />
      <div className="contact__content section container">
        <h2 className="contact__title">Request Callback</h2>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
