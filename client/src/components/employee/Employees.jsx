import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Toolbar, Typography } from "@material-ui/core";

import EmployeeContext from "../../contexts/Employee/employeeContext";

import Employee from "./Employee";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}));

function Employees({ info }) {
  const classes = useStyles();
  const employeeContext = useContext(EmployeeContext);
  const { employees, getEmployees } = employeeContext;

  useEffect(() => {
    getEmployees();
  }, [employees]);

  return (
    <>
      <Typography variant="h3" align="center">
        Employees Management
      </Typography>
      <Toolbar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.root}>
              <TableCell className={classes.head} align="center">
                First Name
              </TableCell>
              <TableCell className={classes.head} align="center">
                Last Name
              </TableCell>
              <TableCell className={classes.head} align="center">
                Salary
              </TableCell>
              <TableCell className={classes.head} align="center">
                Department
              </TableCell>
              <TableCell className={classes.head} align="center">
                Join Date
              </TableCell>
              <TableCell className={classes.head} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <Employee key={employee._id} employeeDetail={employee} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Employees;
