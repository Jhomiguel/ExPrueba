const mongoose = require("mongoose")

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    employees: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employee"
    }
})

module.exports = mongoose.model("department", departmentSchema);