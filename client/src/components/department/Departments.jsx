import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import DepartmentContext from "../../contexts/Department/departmentContext";
import Department from "./Department";
import { Toolbar, Typography } from "@material-ui/core";

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

function Departments() {
  const classes = useStyles();
  const departmentContext = useContext(DepartmentContext);
  const { departments, getDepartments } = departmentContext;

  useEffect(() => {
    getDepartments();
  }, []);

  if (!departments) return <p>Loading</p>;
  return (
    <>
      <Typography variant="h3" align="center">
        Department Management
      </Typography>
      <Toolbar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.root}>
              <TableCell className={classes.head} align="center">
                Name
              </TableCell>
              <TableCell className={classes.head} align="center">
                Description
              </TableCell>
              <TableCell className={classes.head} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments.map((department) => (
              <Department key={department._id} departmentDetails={department} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Departments;
