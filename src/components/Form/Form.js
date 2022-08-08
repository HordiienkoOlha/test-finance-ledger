import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

import { FiArrowLeft } from "react-icons/fi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
};
Modal.setAppElement("#root");

const Form = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (data) => {
    console.log(data);
    openModal();
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <div className="form__field">
            <div className="form__part">
              <input
                type="text"
                className="form__input form__name"
                id="formName"
                name="formName"
                {...register("name", { required: true })}
                placeholder=" "
              />
              <label htmlFor="formName">Enter your name</label>
            </div>

            <div className="form__part">
              <input
                type="email"
                className="form__input form__email"
                id="formEmail"
                name="formEmail"
                min="3"
                {...register("mail", {
                  required: "⚠  This is a required field",
                })}
                placeholder=" "
              />
              <label htmlFor="formEmail">Enter email*</label>
            </div>
            <p className="form__error">{errors.mail?.message}</p>
          </div>

          <button
            className="button form_button"
            type="submit"
            // onClick={openModal}
          >
            Send
          </button>
          <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h3>Thank you!</h3>
            <p>Your form submission has been received.</p>
            <a href="#home" className="form__link" onClick={() => closeModal()}>
              <FiArrowLeft value={{ color: "green" }} />
              Back to our site
            </a>
          </Modal>
        </div>
      </form>
    </>
  );
};

export default Form;
// ⚠
