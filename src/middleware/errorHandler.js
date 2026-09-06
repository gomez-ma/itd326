const { error } = require("../utils/response");

/**
 * Centralized error-handling middleware.
 *
 * Express error middleware must have four parameters:
 * (err, req, res, next)
 */
function errorHandler(err, req, res, next) {
  console.error(err);

  const statusCode = err.statusCode || 500;

  const message =
    statusCode === 500
      ? "Internal Server Error"
      : err.message;

  return error(
    res,
    message,
    statusCode,
    process.env.NODE_ENV === "development"
      ? {
          name: err.name,
          message: err.message
        }
      : null
  );
}

module.exports = errorHandler;