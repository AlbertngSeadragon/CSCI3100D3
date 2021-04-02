const express = require('express');

const EventCtrl = require('../../controllers/eventController');

const router = express.Router();

router.post('/create', EventCtrl.createEvent);
router.put('/update/:id', EventCtrl.updateEvent);
router.delete('/delete/:id', EventCtrl.deleteEvent);
router.get('/:id', EventCtrl.getEventById);
router.get('/', EventCtrl.getEvents);

module.exports = router;