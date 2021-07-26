require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connect = require("./db");
const { verify } = require("./utils/mailer");

const userRouter = require("./routes/user");
const coachRouter = require("./routes/coach");
const adminRouter = require("./routes/admin");
const wodRouter = require("./routes/wod");
const activityRouter = require("./routes/activity");
const modalityRouter = require("./routes/modality");
const exerciseRouter = require("./routes/exercise");
const planRouter = require("./routes/plan");
const newsRouter = require("./routes/news");

const { auth } = require("./utils/middlewares");

const port = process.env.PORT || 8000;
const app = express();
connect();
verify();

app.use(express.json());
app.use(
  cors({
    // origin: process.env.FRONTEND_URL,
  })
);
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/coaches", coachRouter);
app.use("/admin", adminRouter);
app.use("/plan", planRouter);
app.use("/exercise", exerciseRouter);
app.use("/wod", wodRouter);
app.use("/activity", activityRouter);
app.use("/modality", modalityRouter);
app.use("/news", newsRouter);

app.get("/", auth, (req, res) => {
  res.status(200).json({ message: "estás autenticado" });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
