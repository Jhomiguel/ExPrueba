const { Router } = require("express");
const departmentController = require("../controllers/departmentController");
const router = Router();

const {
  addDepartment,
  getDepartment,
  getAllDepartments,
  editDepartment,
  removeDepartment,
} = departmentController;

router.route("/").get(getAllDepartments).post(addDepartment);

router
  .route("/:id")
  .get(getDepartment)
  .put(editDepartment)
  .delete(removeDepartment);

module.exports = router;
