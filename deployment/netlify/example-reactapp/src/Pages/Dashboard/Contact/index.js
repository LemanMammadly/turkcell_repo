import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validation";
import "./styles.css";

const Contact = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));

      if(values.email === "test@test.com"){
        return bag.setErrors({email:"bu mail adresi kullaniliyor"})
      }

      bag.resetForm();
    },
    validationSchema,
  });

  console.log(touched);

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            onChange={handleChange("firstName")}
            value={values.firstName}
            disabled={isSubmitting}
            onBlur={handleBlur('firstName')}
          />
          {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={handleChange("lastName")}
            value={values.lastName}
            disabled={isSubmitting}
            onBlur={handleBlur('lastName')}
          />
          {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            onChange={handleChange("email")}
            value={values.email}
            disabled={isSubmitting}
            onBlur={handleBlur('email')}
          />
          {errors.email && touched.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            onChange={handleChange("message")}
            value={values.message}
            disabled={isSubmitting}
            onBlur={handleBlur('message')}
          />
          {errors.message && touched.message && <div className="error">{errors.message}</div>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
