const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

exports.signup = async (req, res, next) => {
  const { email } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new ErrorResponse("User already exist", 400));
  }
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email) {
      return next(new ErrorResponse("Email is required", 403));
    }
    if (!password) {
      return next(new ErrorResponse("Password is required", 403));
    }

    //check user email
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }
    //check password
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  const cookieOptions = {
    maxAge: 60 * 60 * 1000, // 1 hour
    httpOnly: true,
    secure: true,
    sameSite: "none", // SameSite=None requires Secure=true
  };

  res.status(codeStatus).cookie("token", token, cookieOptions).json({
    success: true,
    role: user.role,
  });
};

exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logged out",
  });
};

exports.userProfile = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-password");

  res.status(200).json({
    success: true,
    user,
  });
};
