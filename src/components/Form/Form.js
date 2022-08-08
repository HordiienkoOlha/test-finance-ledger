import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // const notification = ` This is a required field`;
  // console.log(String(notification));
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
                {...register("mail", {
                  required: "⚠  This is a required field",
                })}
                placeholder=" "
              />
              <label htmlFor="formEmail">Enter email*</label>
            </div>
            <p className="form__error">{errors.mail?.message}</p>
          </div>

          <button className="button form_button" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
// ⚠
