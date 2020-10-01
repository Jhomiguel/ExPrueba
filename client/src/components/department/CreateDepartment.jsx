import { Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import DepartmentoContext from "../../contexts/Department/departmentContext";

const CreateDepartment = () => {
  const [departamento, setDepartamento] = useState({
    nombre: "",
    descripcion: "",
  });
  const [alerta, setAlerta] = useState({});

  const history = useHistory();

  const departamentoContext = useContext(DepartmentoContext);
  const { crearDepartamento } = departamentoContext;
  const { nombre, descripcion } = departamento;

  const handleChange = (e) => {
    setDepartamento({
      ...departamento,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" && descripcion.trim() === "") {
      setAlerta({
        classes: "",
        msg: "No dejar Campos vacios ",
      });

      setTimeout(() => {
        setAlerta({});
      }, 2000);
    }

    crearDepartamento({
      name: nombre,
      description: descripcion,
    });

    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 ">Create Department</h2>
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department Name"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="richtext"
                  className="form-control"
                  placeholder="Department Description"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleChange}
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Create
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
