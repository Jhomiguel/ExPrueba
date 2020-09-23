const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  salary: {
    type: mongoose.Schema.Types.Decimal128,
    require: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "department",
  },
  joinDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("employee", employeeSchema);
