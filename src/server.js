require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connect = require("./db");
const userRouter = require("./routes/user");
const coachRouter = require("./routes/coach");
const adminRouter = require("./routes/admin");
const wodRouter = require("./routes/wod");

const port = process.env.PORT || 8000;
const app = express();
connect();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/coaches", coachRouter);
app.use("/admin", adminRouter);
app.use("/wod", wodRouter);

app.listen(port, () => {
	console.log(`App running at http://localhost:${port}`);
});
