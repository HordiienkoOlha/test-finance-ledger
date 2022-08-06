import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form__input form__name"
          {...register("name", { required: true })}
          placeholder="Enter your name"
        />
        <input
          className="form__input form__email"
          {...register("mail", { required: "This is a required field" })}
          placeholder="Enter email*"
        />
        <p className="form__error">{errors.mail?.message}</p>
        <button className="button form_button" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
