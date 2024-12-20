import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import s from "./ContactForm.module.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={{ handleSubmit }}
        initialValues={{
          username: "",
          number: "",
        }}
      >
        <Form onSubmit={handleSubmit} className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" name="username" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} type="text" name="number" />
          </label>
          <button className={s.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
