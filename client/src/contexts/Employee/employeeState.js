import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import employeeContext from "./employeeContext";
import employeeReducer from "./employeeReducer";

const EmployeeState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <employeeContext.Provider value={{}}>
      {props.children}
    </employeeContext.Provider>
  );
};

export default EmployeeState;
