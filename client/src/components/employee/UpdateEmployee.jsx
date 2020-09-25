import React, { useState, useContext, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import EmployeeContext from "../../contexts/Employee/employeeContext";

const UpdateEmployee = () => {
  const [_id, saveId] = useState("");
  const [firstName, saveFirstName] = useState("");
  const [lastName, saveLastName] = useState("");
  const [salary, saveSalary] = useState(0);
  const [department, saveDepartment] = useState("");
  const [alert, setAlert] = useState({});

  const history = useHistory();

  const employeeContext = useContext(EmployeeContext);
  const { updateEmployee, currentEmployee } = employeeContext;

  useEffect(() => {
    saveId(currentEmployee._id);
    saveFirstName(currentEmployee.firstName);
    saveLastName(currentEmployee.lastName);
    saveSalary(currentEmployee.salary);
    saveDepartment(currentEmployee.department);
  }, [currentEmployee]);
  if (!department) return <p>Loading</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "" || salary <= 0) {
      setAlert({
        msg: "All the fields are required",
        classes: "alert alert-danger text-center text-uppercase p3",
      });
      setTimeout(() => {
        setAlert({});
      }, 2000);
      return;
    }
    updateEmployee({
      _id,
      firstName,
      lastName,
      salary,
      department: department.name,
    });
    history.push("/employee");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 ">Update Employee</h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee First New Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => saveFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee Last New Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => saveLastName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Salary</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Employee Salary"
                  name="salary"
                  value={salary}
                  onChange={(e) => saveSalary(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee Department"
                  name="department"
                  value={department.name}
                  onChange={(e) => saveDepartment(e.target.value)}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Update
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
