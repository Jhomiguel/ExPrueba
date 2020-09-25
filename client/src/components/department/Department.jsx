import React, { useContext } from "react";
import { TableCell, TableRow, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DepartmentContext from "../../contexts/Department/departmentContext";

const useStyles = makeStyles((theme) => ({
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  btnDelete: {
    color: theme.palette.common,
  },
}));

function Department({ departmentDetails }) {
  const { _id, name, description } = departmentDetails;
  const departmentContext = useContext(DepartmentContext);
  const history = useHistory();
  const classes = useStyles();

  const { deleteDepartment, getDepartment } = departmentContext;

  const redirecToUpdate = (departmentId) => {
    getDepartment(departmentId);
    history.push(`/department/edit/${departmentId}`);
  };
  return (
    <>
      <TableRow className={classes.row}>
        <TableCell component="th" align="center" scope="row">
          {name}
        </TableCell>
        <TableCell align="center">{description}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => redirecToUpdate(_id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            className={classes.btnDelete}
            onClick={() => deleteDepartment(_id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Department;
