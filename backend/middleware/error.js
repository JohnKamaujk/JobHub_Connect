const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  // Create a copy of the error object
  let error = { ...err };
  error.message = err.message;

  // Handle CastError (Invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    const message = `Resource not found with id: ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Handle Mongoose duplicate key violation error
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  // Handle Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => " " + val.message);
    error = new ErrorResponse(message, 400);
  }

  // Send a JSON response with the appropriate status code and error message
  res.status(error.codeStatus || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};

module.exports = errorHandler;
