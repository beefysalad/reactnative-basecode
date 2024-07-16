const { default: mongoose } = require("mongoose");
const validator = require("validator");
const logSchema = new mongoose.Schema(
  {
    timeIn: {
      type: Date,
    },
    timeOut: {
      type: Date,
    },
    workedHours: {
      type: String,
    },
  },
  {
    _id: false,
  }
);
const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    logs: {
      type: [logSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {
  Employee,
};
