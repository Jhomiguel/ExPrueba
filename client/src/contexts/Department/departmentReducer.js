import {
  CREATE_DEPARTMENT,
  GET_DEPARTMENTS,
  GET_DEPARTMENT,
  DELETE_DEPARTMENT,
  EDIT_DEPARTMENT,
} from "../../types";

const departmentReducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_DEPARTAMENTO":
      return {
        ...state,
      };
    case "OBTENER_DEPARTAMENTOS":
      console.log(action.payload);
      return {
        ...state,
        departamentos: action.payload,
      };
    default:
      return state;
  }
};

export default departmentReducer;
