const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    joinDate: {
        type: Date,
        default: Date.now()
    },

    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department"
    }
})

module.exports = mongoose.model("employee", employeeSchema);