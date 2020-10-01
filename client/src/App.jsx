import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./components/sideBar";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import CreateDepartment from "./components/department/CreateDepartment";
import Departments from "./components/department/Departments";
import UpdateDepartment from "./components/department/UpdateDepartment";

import Employees from "./components/employee/Employees";
import AddEmployee from "./components/employee/AddEmployee";
import UpdateEmployee from "./components/employee/UpdateEmployee";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <SideBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Departments />
            </Route>
            <Route exact path="/department/create">
              <CreateDepartment />
            </Route>
            <Route exact path="/department/edit/:id">
              <UpdateDepartment />
            </Route>
            <Route exact path="/employee">
              <Employees />
            </Route>
            <Route exact path="/employee/add">
              <AddEmployee />
            </Route>
            <Route exact path="/employee/edit/:id">
              <UpdateEmployee />
            </Route>
            <Route path="*" exact={true}>
              <h1>Not found 404</h1>
            </Route>
          </Switch>
        </Container>
      </div>
    </>
  );
}

export default App;
