import React from "react";
import "./department.css";
import useValidation from "../../hooks/useValidation";
import validateDepartment from "../../validations/validateDepartment";

const INITIAL_STATE = {
  name: "",
  description: "",
  employeesNumber: 0,
};

function CreateDepartment() {
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(INITIAL_STATE, validateDepartment);

  return (
    <form className="formCreate" noValidate>
      <fieldset>
        <legend>Informacion General</legend>

        <div className="field">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            placeholder="Tu name"
            name="name"
            // value={name}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </div>
        {/* {errors.name && <p className="error">{errors.name}</p>} */}
        <div className="field">
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            placeholder="Tu empresa"
            name="empresa"
            // value={empresa}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </div>
        {/* {errors.empresa && <p className="error">{errors.empresa}</p>} */}
      </fieldset>

      <fieldset>
        <legend>Sobre tu producto</legend>
        <div className="field">
          <label htmlFor="descripcion">Descipcion</label>
          <textarea
            id="descripcion"
            name="descripcion"
            // value={descripcion}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
        </div>
        {/* {errors.descripcion && <p className="error">{errors.descripcion}</p>} */}
      </fieldset>

      {/* {errors && <p className="error">{errors}</p>} */}
      <input className="inputSubmit" type="submit" value="Agregar" />
    </form>
  );
}

export default CreateDepartment;
