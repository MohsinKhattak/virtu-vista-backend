const JobPost = require("../models/JobPostModel");

exports.createJobPost = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      skillsRequired,
      skillLevel,
      paymentMethod,
      budget,
    } = req.body;

    // To be changed Later

    const jobPost = new JobPost({
      title,
      category,
      description,
      skillsRequired,
      skillLevel,
      paymentMethod,
      budget,
    });

    await jobPost.save();

    res.status(201).json({ success: true, jobPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
};
