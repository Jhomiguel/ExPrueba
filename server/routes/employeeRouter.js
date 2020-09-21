const { Router } = require("express");
const employeeController = require("../controllers/employeeController");

const router = Router();

const { addEmployee, removeEmployee, editEmployee, getEmployee, getAllEmployees, } = employeeController

router
    .route('/')
    .get(getAllEmployees)
    .post(addEmployee)

router
    .route('/:id')
    .get(getEmployee)
    .put(editEmployee)
    .delete(removeEmployee)

module.exports = router