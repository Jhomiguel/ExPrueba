import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import ThemeState from "./contexts/Theme/themeState";
import EmployeeState from "./contexts/Employee/employeeState";
import DepartmentState from "./contexts/Department/departmentState";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ThemeState>
      <EmployeeState>
        <DepartmentState>
          <Router>
            <App />
          </Router>
        </DepartmentState>
      </EmployeeState>
    </ThemeState>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
