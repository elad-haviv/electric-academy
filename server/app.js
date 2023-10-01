import createError from "http-errors";
import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

import indexRouter from "./routes/index";
import questionsRouter from "./routes/questions";
import simulatorRouter from "./routes/simulator";
import learnRouter from "./routes/learn";
import { config } from "dotenv";

config();
const app = express();

// Database connection
mongoose
    .connect(`${process.env.DB_ADDRESS}/${process.env.DB_COLLECTIONs}`)
    .then(() => console.log("Established connection to database"))
    .catch((err) => console.error("Error connecting to database:", err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routers setup
app.use("/", indexRouter);
app.use("/questions", questionsRouter);
app.use("/simulator", simulatorRouter);
app.use("/learn", learnRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

export default app;
