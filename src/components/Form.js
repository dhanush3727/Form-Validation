import React, { useContext } from "react";
import FormContext from "../context/FromContext";
import Popup from "./Popup";

const Form = () => {
  const { formValues, handleChange, handleSubmit, formErrors, isSubmit } =
    useContext(FormContext);
  return (
    <div className="form-detail">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h1>SignUp Form</h1>
        <label htmlFor="firstName">First Name*</label>
        <br />
        <input
          type="text"
          name="firstname"
          value={formValues.firstname}
          onChange={handleChange}
        />
        {!formValues.firstname ? <p>{formErrors.firstname}</p> : <br />}
        <label htmlFor="lastName">Last Name*</label>
        <br />
        <input
          type="text"
          name="lastname"
          value={formValues.lastname}
          onChange={handleChange}
        />
        {!formValues.lastname ? <p>{formErrors.lastname}</p> : <br />}
        <label htmlFor="email">Email*</label>
        <br />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {!formValues.email ? <p>{formErrors.email}</p> : <br />}
        <label htmlFor="password">Password*</label>
        <br />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {!formValues.password || formValues.password.length < 8 ? (
          <p>{formErrors.password}</p>
        ) : (
          <br />
        )}
        <label htmlFor="cpassword">Confirm Password*</label>
        <br />
        <input
          type="password"
          name="confirmpassword"
          value={formValues.confirmpassword}
          onChange={handleChange}
        />
        {!formValues.confirmpassword ||
        formValues.confirmpassword !== formValues.password ? (
          <p>{formErrors.confirmpassword}</p>
        ) : (
          <br />
        )}
        <button className="btn">Submit</button>
      </form>
      <div className="msg">
        {Object.keys(formErrors).length === 0 && isSubmit ? <Popup /> : null}
      </div>
    </div>
  );
};

export default Form;
