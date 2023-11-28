const JobType = require("../models/jobTypeModel");
const ErrorResponse = require("../utils/errorResponse");

//create job category
exports.createJobType = async (req, res, next) => {
  try {
    const jobT = await JobType.create({
      jobTypeName: req.body.jobTypeName,
      user: req.user.id,
    });
    res.status(201).json({
      success: true,
      jobT,
    });
  } catch (error) {
    next(error);
  }
};

//all jobs categories
exports.allJobTypes = async (req, res, next) => {
  try {
    const jobTypes = await JobType.find();
    res.status(200).json({
      success: true,
      jobTypes,
    });
  } catch (error) {
    next(error);
  }
};
