const express = require('express');

const EventCtrl = require('../../controllers/eventCtrl');
const passport = require('passport');
const router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), EventCtrl.createEvent);
router.put('/:id', passport.authenticate('jwt', { session: false }), EventCtrl.updateEvent);
router.delete('/:id', passport.authenticate('jwt', { session: false }), EventCtrl.deleteEvent);
router.get('/:id', EventCtrl.getEventById);
router.get('/', EventCtrl.getEvents);
router.put('/:id/join', passport.authenticate('jwt', { session: false }), EventCtrl.joinEvent);

module.exports = router;