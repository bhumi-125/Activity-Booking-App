const Activity = require('../models/Activity');


exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();

    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};


exports.createActivity = async (req, res) => {
  try {
    const activity = await Activity.create(req.body);

    res.status(201).json({
      success: true,
      data: activity
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};