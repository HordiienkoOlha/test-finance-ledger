import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const notification = ` This is a required field`;
  console.log(String(notification));
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <div className="form__field">
            <label>
              <input
                className="form__input form__name"
                {...register("name", { required: true })}
                placeholder="Enter your name"
              />
            </label>
            <label>
              <input
                className="form__input form__email"
                {...register("mail", {
                  required: "⚠  This is a required field",
                  // required: { notification },
                  // required: { warning },
                })}
                placeholder="Enter email*"
              />
            </label>
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
