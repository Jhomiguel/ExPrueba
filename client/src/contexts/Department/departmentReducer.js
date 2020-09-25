import {
  CREATE_DEPARTMENT,
  GET_DEPARTMENTS,
  GET_DEPARTMENT,
  DELETE_DEPARTMENT,
  EDIT_DEPARTMENT,
} from "../../types";

const departmentReducer = (state, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS:
      console.log(action.payload);
      return {
        ...state,
        departments: action.payload,
      };
    case CREATE_DEPARTMENT:
      return {
        ...state,
      };
    case GET_DEPARTMENT:
      console.log(action.payload);
      return {
        ...state,
        currentDepartment: action.payload,
      };
    case DELETE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.filter(
          (department) => department._id !== action.payload
        ),
      };

    case EDIT_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.map((department) =>
          department._id === action.payload ? action.payload : department
        ),
      };
    default:
      return state;
  }
};

export default departmentReducer;
