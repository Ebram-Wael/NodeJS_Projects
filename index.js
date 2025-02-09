const express = require("express");

const app = express();
const coursesRouter = require("./session_2/routes/courses.route");

app.use("/courses", coursesRouter);

app.listen(3001, () => {
    console.log(" listening on port 3001 ");
});
