import React, { useState, useContext, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DepartmentContext from "../../contexts/Department/departmentContext";

const UpdateDepartment = () => {
  const [department, saveDepartment] = useState({});
  const [alert, setAlert] = useState({});

  const history = useHistory();
  const departmentContext = useContext(DepartmentContext);
  const { updateDepartment, currentDepartment } = departmentContext;

  const { name, description } = department;

  useEffect(() => {
    saveDepartment(currentDepartment);
  }, [currentDepartment]);

  if (!currentDepartment) return <p>Loading</p>;

  const handleChange = (e) => {
    saveDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() == "" || description.trim() == "") {
      setAlert({
        msg: "All the fields are required",
        classes: "alert alert-danger text-center text-uppercase p3",
      });
      setTimeout(() => {
        setAlert({});
      }, 2000);
      return;
    }
    updateDepartment(department);
    history.push("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 ">Update Department</h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department New Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department New Description"
                  name="description"
                  value={description}
                  onChange={handleChange}
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

export default UpdateDepartment;
