const express = require("express");
const { json, urlencoded } = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const employeeRoute = require("./routes/employeeRouter")
const departmentRoute = require("./routes/departmentRouter")

const port = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/api/employee", employeeRoute);
app.use("/api/department", departmentRoute);

app.get("/", (req, res) => {
    res.json("Hellou")
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})