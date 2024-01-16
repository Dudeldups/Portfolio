import { useRef } from "react";
import { useForm } from "react-hook-form";
import { emailRegexPattern } from "../../utils/regexPatterns";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.scss";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = async () => {
    try {
      if (formRef.current) {
        const res = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        if (res.status === 200) toast.success("Message was sent successfully!");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unknown error: " + error);
      }
    }
  };

  return (
    <div className="form__wrapper">
      <form
        className="form"
        ref={formRef}
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="form__label">
          Name
          <input
            className="form__input"
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
        </label>
        <p
          className="form__error-message"
          aria-live="polite"
          aria-labelledby="name"
          role="alert">
          {errors.name ? errors.name.message : ""}
        </p>

        <label htmlFor="email" className="form__label">
          Email
          <input
            className="form__input"
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
          className="form__error-message"
          aria-live="polite"
          aria-labelledby="email"
          role="alert">
          {errors.email ? errors.email.message : ""}
        </p>

        <label htmlFor="message" className="form__label">
          Message
          <textarea
            className="form__input"
            id="message"
            cols={30}
            rows={8}
            {...register("message", {
              required: "You forgot the message :(",
            })}></textarea>
        </label>
        <p
          className="form__error-message"
          aria-live="polite"
          aria-labelledby="message"
          role="alert">
          {errors.message ? errors.message.message : ""}
        </p>

        <button className="btn btn--send" type="submit">
          Send
        </button>
      </form>

      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default ContactForm;
