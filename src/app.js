const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const errorHandler = require("./middleware/errorHandler");
const { success } = require("./utils/response");

const app = express();

/*
|--------------------------------------------------------------------------
| Security Middleware
|--------------------------------------------------------------------------
*/

app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*"
  })
);

/*
|--------------------------------------------------------------------------
| Request Logging
|--------------------------------------------------------------------------
*/

app.use(morgan("dev"));

/*
|--------------------------------------------------------------------------
| Body Parsing Middleware
|--------------------------------------------------------------------------
*/

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

/*
|--------------------------------------------------------------------------
| Basic Routes
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  return success(
    res,
    {
      name: "Member API Access System",
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development"
    },
    "API is running"
  );
});

app.get("/health", (req, res) => {
  return success(
    res,
    {
      status: "UP"
    },
    "Service is healthy"
  );
});

/*
|--------------------------------------------------------------------------
| 404 Handler
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
    data: null
  });
});

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use(errorHandler);

module.exports = app;