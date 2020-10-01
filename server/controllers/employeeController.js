const employeeModel = require("../models/employee");
const departmentModel = require("../models/department");

//Add a employee
const addEmployee = async (req, res) => {
  try {
    const employee = await employeeModel.create({
      ...req.body,
      department: req.department._id,
    });

    res.status(201).json({ data: employee });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Get an employee by ID
const getEmployee = async (req, res) => {
  try {
    const employee = await employeeModel
      .findById(req.params.id)
      .populate("department")
      .lean()
      .exec();

    if (!employee) {
      return res.status(404).end();
    }
    res.status(200).json({ data: employee });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Get all the employee
const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeModel
      .find()
      .populate("department")
      .lean()
      .exec();

    if (!employees) {
      return res.status(404).end();
    }

    res.status(200).send({ data: employees });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Remove an employee by ID
const removeEmployee = async (req, res) => {
  try {
    const removedEmployee = await employeeModel.findOneAndRemove({
      _id: req.params.id,
    });

    if (!removedEmployee) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removedEmployee });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Edit an employee by ID
const editEmployee = async (req, res) => {
  try {
    //Verify if the department really exists
    const departmentName = req.body.department;
    const department = await departmentModel.findOne({ name: departmentName });

    if (!department)
      return res.status(404).json({ error: "Department not Found" });

    const updatedEmployee = await employeeModel
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { ...req.body, department: department._id },
        { new: true }
      )
      .populate("department")
      .lean()
      .exec();

    if (!updatedEmployee) {
      return res.status(400).end();
    }
    res.status(200).json({ data: updatedEmployee });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = {
  addEmployee,
  getEmployee,
  getAllEmployees,
  removeEmployee,
  editEmployee,
};
