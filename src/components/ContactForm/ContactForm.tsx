import { useForm } from "react-hook-form";
import { emailRegexPattern } from "../../utils/regexPatterns";
import { DevTool } from "@hookform/devtools";
// TODO: Remove Devtools

import "./ContactForm.scss";

// interface ContactFormProps {}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () =>
  // {}: ContactFormProps
  {
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
    } = useForm<FormValues>({ mode: "onBlur" });

    const onSubmit = (data: FormValues) => {
      console.log("Form submitted", data);
    };

    return (
      <div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="contact__label">
            Name
            <input
              className="contact__input"
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required.",
              })}
            />
          </label>
          <p
            className="error-message"
            aria-live="polite"
            aria-labelledby="name"
            role="alert">
            {errors.name ? errors.name.message : ""}
          </p>

          <label htmlFor="email" className="contact__label">
            Email
            <input
              className="contact__input"
              type="text"
              id="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: emailRegexPattern,
                  message: "Invalid email format.",
                },
              })}
            />
          </label>
          <p
            className="error-message"
            aria-live="polite"
            aria-labelledby="email"
            role="alert">
            {errors.email ? errors.email.message : ""}
          </p>

          <label htmlFor="message" className="contact__label">
            Message
            <textarea
              className="contact__input"
              id="message"
              cols={30}
              rows={8}
              {...register("message", {
                required: "You forgot the message :(",
              })}></textarea>
          </label>
          <p
            className="error-message"
            aria-live="polite"
            aria-labelledby="message"
            role="alert">
            {errors.message ? errors.message.message : ""}
          </p>

          <button type="submit">Send</button>
        </form>

        <DevTool control={control} />
      </div>
    );
  };

export default ContactForm;
