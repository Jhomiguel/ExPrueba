import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import departmentContext from "./departmentContext";
import departmentReducer from "./departmentReducer";

const DepartmentState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(departmentReducer, initialState);

  return (
    <departmentContext.Provider value={{}}>
      {props.children}
    </departmentContext.Provider>
  );
};

export default DepartmentState;
