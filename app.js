const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const studentRoute = require("./routes/studentRoutes")
app.use("/student", studentRoute);


const subjectRoute = require("./routes/subjectRoutes")
app.use("/subject", subjectRoute);





app.listen(3000)