const express = require('express');

const EventCtrl = require('../../controllers/eventCtrl');
const passport = require('passport');
const router = express.Router();

// GET /api/events/trending
// fetch top three trending events (trending defined by number of participants in event)
router.get('/trending', EventCtrl.getTrending);

// POST /api/events
// create a new event
router.post('/', passport.authenticate('jwt', { session: false }), EventCtrl.createEvent);

// PUT /api/events/:id
// update event given by id
router.put('/:id', passport.authenticate('jwt', { session: false }), EventCtrl.updateEvent);

// DELETE /api/events/:id
// delete event given by id
router.delete('/:id', passport.authenticate('jwt', { session: false }), EventCtrl.deleteEvent);

// GET /api/events/:id
// fetch an event given by id
router.get('/:id', EventCtrl.getEventById);

// PUT /api/events/:id/join
// add participant to the event given by id
router.put('/:id/join', passport.authenticate('jwt', { session: false }), EventCtrl.joinEvent);

// GET /api/events/
// or /api/events?eventType=${type}
// fetch all events or events given by type
router.get('/', EventCtrl.getEvents);

module.exports = router;