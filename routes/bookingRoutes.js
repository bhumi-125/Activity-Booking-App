const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(protect, getMyBookings).post(protect, bookActivity);

module.exports = router;