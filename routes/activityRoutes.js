const express = require('express');
const { getActivities, createActivity } = require('../controllers/activityController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/').get(getActivities).post(protect, createActivity);

module.exports = router;