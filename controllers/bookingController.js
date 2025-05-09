const Booking = require('../models/Booking');
const Activity = require('../models/Activity');


exports.bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;

    // Check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({
        success: false,
        error: 'Activity not found'
      });
    }

    // Check if already booked
    const existingBooking = await Booking.findOne({
      user: req.user.id,
      activity: activityId
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        error: 'You have already booked this activity'
      });
    }

    // Create booking
    const booking = await Booking.create({
      user: req.user.id,
      activity: activityId
    });

    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate({
      path: 'activity',
      select: 'title description location dateTime'
    });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
