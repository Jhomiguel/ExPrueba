import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./components/sideBar";

import CreateDepartment from "./components/department/CreateDepartment";
import Departments from "./components/department/Departments";
import EditDepartment from "./components/department/EditDepartment";

import Employees from "./components/employee/Employees";
import AddEmployee from "./components/employee/AddEmployee";
import EditEmployee from "./components/employee/EditEmployee";

function App() {
  return (
    <>
      {/* <SideBar /> */}
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Departments />
          </Route>
          <Route exact path="/department/create">
            <CreateDepartment />
          </Route>
          <Route exact path="/department/edit/:id">
            <EditDepartment />
          </Route>
          <Route exact path="/employee">
            <Employees />
          </Route>
          <Route exact path="/employee/add">
            <AddEmployee />
          </Route>
          <Route exact path="/employee/edit/:id">
            <EditEmployee />
          </Route>
          <Route path="*" exact={true}>
            <h1>Not found 404</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
