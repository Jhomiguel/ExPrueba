import React, { useContext } from "react";
import { TableCell, TableRow, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import EmployeeContext from "../../contexts/Employee/employeeContext";

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

function Employee({ employeeDetail }) {
  const {
    _id,
    firstName,
    lastName,
    salary,
    joinDate,
    department,
  } = employeeDetail;

  const employeeContext = useContext(EmployeeContext);
  const history = useHistory();
  const classes = useStyles();

  const { deleteEmployee, getEmployee } = employeeContext;

  const redirecToUpdate = (employeeId) => {
    getEmployee(employeeId);
    history.push(`/employee/edit/${employeeId}`);
  };

  return (
    <>
      <TableRow className={classes.row}>
        <TableCell component="th" align="center">
          {firstName}
        </TableCell>
        <TableCell align="center">{lastName}</TableCell>

        <TableCell component="th" align="center">
          {`${salary} $`}
        </TableCell>
        <TableCell align="center">{department.name}</TableCell>
        <TableCell align="center">{joinDate}</TableCell>
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
            onClick={() => deleteEmployee(_id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Employee;
