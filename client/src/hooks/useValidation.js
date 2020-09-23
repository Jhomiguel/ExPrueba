import { useState, useEffect } from "react";

const useValidation = (stateInicial, validate, fn) => {
  const [values, saveValues] = useState(stateInicial);
  const [errors, saveErrors] = useState({});
  const [submitform, saveSubmitForm] = useState(false);

  useEffect(() => {
    if (submitform) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fn(); // fn:  Funcion que se ejecuta en el componente
      }
      saveSubmitForm(false);
    }
  }, [errors]);

  //Funcion que se ejecuta conforme al usuario escribe algo
  const handleChange = (e) => {
    saveValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidacion = validate(values);
    saveErrors(errorsValidacion);
    saveSubmitForm(true);
  };
  //Funcion que se ejecuta cuando se sale de un input
  const handleBlur = () => {
    const errorsValidacion = validate(values);
    saveErrors(errorsValidacion);
  };
  return {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useValidation;
