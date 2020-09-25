import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
} from "../../types";

const employeeReducer = (state, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case CREATE_EMPLOYEE:
      return {
        ...state,
      };
    case GET_EMPLOYEE:
      console.log(action.payload);
      return {
        ...state,
        currentEmployee: action.payload,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee._id !== action.payload
        ),
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee._id === action.payload ? action.payload : employee
        ),
      };
    default:
      return state;
  }
};

export default employeeReducer;
