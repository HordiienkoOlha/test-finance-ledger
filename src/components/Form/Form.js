import { useForm } from "react-hook-form";
import warning from "../../images/form/warning.svg";

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
        <div className="form__label">
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
        </div>
        <p className="form__error">{errors.mail?.message}</p>
        <button className="button form_button" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
// ⚠
