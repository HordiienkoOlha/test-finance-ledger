import contactWebp from "../../images/home/contact.webp";
import contact2Webp from "../../images/home/contact@2x.webp";
import contact from "../../images/home/contact.jpg";
import contact2 from "../../images/home/contact@2x.jpg";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <section>
      <div className="contact" id="contact">
        <ul className="contact__list">
          <li className="contact__item contact__photo">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${contactWebp} 1x,
                  ${contact2Webp} 2x`}
                type="image/webp"
              />
              <source
                media="(min-width: 1200px)"
                srcSet={`
                    ${contact} 1x,
                    ${contact2} 2x`}
              />
              <img
                className="contact__image"
                src={contact}
                alt="Worker at the work"
              />
            </picture>
          </li>
          <li className="contact__item">
            <div className="contact__content section">
              <h2 className="contact__title">Request Callback</h2>
              <Form />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
