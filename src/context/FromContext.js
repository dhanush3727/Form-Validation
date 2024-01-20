import { createContext } from "react";
import { useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    setFormErrors(validationErrors);
    setIsSubmit(true);
    console.log(formValues);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "*FirstName is required";
    }
    if (!values.lastname) {
      errors.lastname = "*LastName is required";
    }
    if (!values.email) {
      errors.email = "*Email is required";
    }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password atleast 8 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "*Confirm passowrd Required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Password not match";
    }
    return errors;
  };
  const closePopup = () => {
    setIsSubmit(false);
    setFormValues({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <FormContext.Provider
      value={{
        formValues,
        formErrors,
        handleSubmit,
        handleChange,
        isSubmit,
        closePopup,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
