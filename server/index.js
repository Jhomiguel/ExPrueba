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
//Allows request from differents domains
app.use(cors());
//Parse incoming request bodies
app.use(json());
//Returns middleware that only parses urlencoded bodies
app.use(urlencoded({ extended: true }));

app.use(morgan("dev"));

//Every employee request will use the employee route and viceversa for departments
app.use("/api/employee", employeeRoute);
app.use("/api/department", departmentRoute);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
