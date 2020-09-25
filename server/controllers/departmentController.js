const departmentModel = require("../models/department");
const employeeModel = require("../models/employee");

//Add a department
const addDepartment = async (req, res) => {
  try {
    const department = await departmentModel.create(req.body);
    res.status(201).json({ data: department });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Get all the departments
const getDepartment = async (req, res) => {
  try {
    const department = await departmentModel
      .findById(req.params.id)
      .lean()
      .exec();

    if (!department) {
      return res.status(404).end();
    }
    res.status(200).json({ data: department });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Get a department by ID
const getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentModel.find({}).lean().exec();

    if (!departments) {
      return res.status(404).end();
    }

    res.status(200).json({ data: departments });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Remove a department by ID
const removeDepartment = async (req, res) => {
  try {
    const thereAreEmployees = await employeeModel
      .find({
        department: req.params.id,
      })
      .exec();

    console.log(thereAreEmployees.length);
    if (thereAreEmployees.length)
      return res.status(403).send({ error: "This Department has employees" });

    const removedDepartment = await departmentModel.findByIdAndRemove(
      req.params.id
    );

    if (!removedDepartment) {
      return res.status(404).end();
    }

    return res.status(200).json({ data: removedDepartment });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

//Edit a department by ID
const editDepartment = async (req, res) => {
  try {
    const updatedDepartment = await departmentModel
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec();

    if (!updatedDepartment) {
      return res.status(400).end();
    }
    res.status(200).json({ data: updatedDepartment });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = {
  addDepartment,
  getDepartment,
  getAllDepartments,
  removeDepartment,
  editDepartment,
};
