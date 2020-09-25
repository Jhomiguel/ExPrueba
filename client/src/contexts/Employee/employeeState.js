import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import employeeContext from "./employeeContext";
import employeeReducer from "./employeeReducer";
import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
} from "../../types";

const EmployeeState = (props) => {
  const initialState = {
    employees: [],
    currentEmployee: {},
  };

  const [state, dispatch] = useReducer(employeeReducer, initialState);

  const getEmployees = async () => {
    try {
      const result = await axiosClient.get("/employee");
      dispatch({
        type: GET_EMPLOYEES,
        payload: result.data.data,
      });
    } catch (error) {}
  };

  const getEmployee = async (employeeId) => {
    try {
      const result = await axiosClient.get(`/employee/${employeeId}`);
      dispatch({
        type: GET_EMPLOYEE,
        payload: result.data.data,
      });
    } catch (error) {}
  };

  const updateEmployee = async (employee) => {
    console.log(employee);
    try {
      const result = await axiosClient.put(
        `/employee/${employee._id}`,
        employee
      );
      dispatch({
        type: EDIT_EMPLOYEE,
        payload: result.data.data._id,
      });
    } catch (error) {}
  };

  const deleteEmployee = async (employeeId) => {
    try {
      const result = await axiosClient.delete(`/employee/${employeeId}`);
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: result.data.data._id,
      });
    } catch (error) {}
  };

  const createEmployee = async (employee) => {
    try {
      await axiosClient.post("/employee", employee);
      dispatch({
        type: CREATE_EMPLOYEE,
      });
    } catch (error) {}
  };

  return (
    <employeeContext.Provider
      value={{
        //State
        employees: state.employees,
        currentEmployee: state.currentEmployee,
        //Dispatch
        createEmployee,
        getEmployees,
        getEmployee,
        deleteEmployee,
        updateEmployee,
      }}
    >
      {props.children}
    </employeeContext.Provider>
  );
};

export default EmployeeState;
