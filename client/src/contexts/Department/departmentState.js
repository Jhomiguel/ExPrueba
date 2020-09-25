import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import departmentContext from "./departmentContext";
import departmentReducer from "./departmentReducer";

import {
  CREATE_DEPARTMENT,
  GET_DEPARTMENTS,
  GET_DEPARTMENT,
  DELETE_DEPARTMENT,
  EDIT_DEPARTMENT,
} from "../../types";

const DepartmentState = (props) => {
  const initialState = {
    departments: [],
    currentDepartment: {},
  };

  const [state, dispatch] = useReducer(departmentReducer, initialState);

  const getDepartments = async () => {
    try {
      const result = await axiosClient.get("/department");
      dispatch({
        type: GET_DEPARTMENTS,
        payload: result.data.data,
      });
    } catch (error) {}
  };

  const getDepartment = async (departmentId) => {
    try {
      const result = await axiosClient.get(`/department/${departmentId}`);
      console.log(result);
      dispatch({
        type: GET_DEPARTMENT,
        payload: result.data.data,
      });
    } catch (error) {}
  };

  const updateDepartment = async (department) => {
    try {
      const result = await axiosClient.put(
        `/department/${department._id}`,
        department
      );
      console.log(result);
      dispatch({
        type: EDIT_DEPARTMENT,
        payload: result.data.data._id,
      });
    } catch (error) {}
  };

  const deleteDepartment = async (departmentId) => {
    try {
      const result = await axiosClient.delete(`/department/${departmentId}`);
      console.log(result);
      dispatch({
        type: DELETE_DEPARTMENT,
        payload: result.data.data._id,
      });
    } catch (error) {}
  };

  const createDepartment = async (department) => {
    try {
      await axiosClient.post("/department", department);
      dispatch({
        type: CREATE_DEPARTMENT,
      });
    } catch (error) {}
  };

  return (
    <departmentContext.Provider
      value={{
        //state
        departments: state.departments,
        currentDepartment: state.currentDepartment,
        //dispatch
        createDepartment,
        getDepartments,
        getDepartment,
        deleteDepartment,
        updateDepartment,
      }}
    >
      {props.children}
    </departmentContext.Provider>
  );
};

export default DepartmentState;
