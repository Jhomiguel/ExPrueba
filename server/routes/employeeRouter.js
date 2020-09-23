const { Router } = require("express");
const employeeDepartment = require("../middleware/getEmployeeDepartment");

const employeeController = require("../controllers/employeeController");

const router = Router();

const {
  addEmployee,
  removeEmployee,
  editEmployee,
  getEmployee,
  getAllEmployees,
} = employeeController;

router.route("/").get(getAllEmployees).post(employeeDepartment, addEmployee);

router.route("/:id").get(getEmployee).put(editEmployee).delete(removeEmployee);

module.exports = router;
