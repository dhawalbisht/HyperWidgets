const express = require('express');
const calendarController = require('./controllers/calendarController');
const router = express.Router();

router.get('/api/upcoming-meetings', calendarController.getUpcomingMeetings);

module.exports = router;
