const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const DBConnection = require("./config/db");
const employeeRoute = require("./routes/employeeRouter");
const departmentRoute = require("./routes/departmentRouter");

const port = process.env.PORT || 4000;
const app = express();
DBConnection();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/employee", employeeRoute);
app.use("/api/department", departmentRoute);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
