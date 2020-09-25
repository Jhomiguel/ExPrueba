const departmentModel = require("../models/department");

//Middleware which get the employee department
const getEmployeeDepartment = async (req, res, next) => {
  const departmentName = req.body.department;
  const department = await departmentModel.findOne({ name: departmentName });

  if (!department)
    return res.status(404).send({ error: "Department not Found" });

  req.department = department;
  next();
};

module.exports = getEmployeeDepartment;
