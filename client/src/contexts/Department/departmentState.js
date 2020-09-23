import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import departmentContext from "./departmentContext";
import departmentReducer from "./departmentReducer";

import { CREATE_DEPARTMENT, GET_DEPARTMENTS } from "../../types";

const DepartmentState = (props) => {
  const initialState = {
    departments: [],
    CurrentDepartment: {},
  };

  const [state, dispatch] = useReducer(departmentReducer, initialState);

  const getDepartments = () => {
    const result = axiosClient.get("/department");
    console.log(result);
    dispatch({
      type: GET_DEPARTMENTS,
      payload: result,
    });
  };
  const createDepartment = (department) => {
    const result = axiosClient.post("/department", department);
    console.log(result);
    dispatch({
      type: CREATE_DEPARTMENT,
      payload: result,
    });
  };

  return (
    <departmentContext.Provider
      value={{
        //state
        departments: initialState.departments,
        //dispatch
        createDepartment,
      }}
    >
      {props.children}
    </departmentContext.Provider>
  );
};

export default DepartmentState;
