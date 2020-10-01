import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import departmentContext from "./departmentContext";
import departmentReducer from "./departmentReducer";

const DepartmentState = (props) => {
  const initialState = {
    departamentos: [],
    departamentoActual: {},
  };

  const [state, dispatch] = useReducer(departmentReducer, initialState);

  const getDepartments = async () => {
    try {
      const resultado = await axiosClient.get("/department");
      dispatch({
        type: "OBTENER_DEPARTAMENTOS",
        payload: resultado.data.data,
      });
    } catch (error) {}
  };

  const createDepartment = async (department) => {
    try {
      await axiosClient.post("/department", department);
      dispatch({
        type: "AGREGAR_DEPARTAMENTO",
      });
    } catch (error) {}
  };

  return (
    <departmentContext.Provider
      value={{
        //State
        departamentos: state.departamentos,
        //Functions
        crearDepartamento: createDepartment,
        getDepartments,
      }}
    >
      {props.children}
    </departmentContext.Provider>
  );
};

export default DepartmentState;
