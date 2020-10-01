import React, { useContext, useEffect } from "react";
import DepartamentoContext from "../../contexts/Department/departmentContext";

function Departments() {
  const departamentoContext = useContext(DepartamentoContext);
  const { departamentos, getDepartments } = departamentoContext;

  useEffect(() => {
    getDepartments();
  }, []);

  if (!departamentos) return <p>Loading</p>;

  return (
    <>
      {departamentos.map((departamento) => (
        <li key={departamento._id}>{departamento.name}</li>
      ))}
    </>
  );
}

export default Departments;
