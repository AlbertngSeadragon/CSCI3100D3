const express = require('express');
const router = express.Router();
const passport = require('passport');

const Event = require('../../models/Event');

// GET /api/events/:id
// find an event by Id
router.get('/:id', (req, res) => {
    Event.findById(req.params.id)
        .populate('user', ['name'])
        .then(event => res.json(event))
        .catch(err =>
            res.status(404).json({ error: "Error in get api/events/:id " + err })
        );
});

// POST /api/events/create
// create event
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {

    const eventBody = {};
    eventBody.host = req.user.id;

    if (req.body.eventName) eventBody.eventName = req.body.eventName;
    if (req.body.eventType) eventBody.eventType = req.body.eventType;
    if (req.body.quota) eventBody.quota = req.body.quota;
    if (req.body.location) eventBody.location = req.body.location;
    if (req.body.description) eventBody.description = req.body.description;
    if (req.body.img) eventBody.img = req.body.img;
    if (req.body.eventDate) eventBody.eventDate = req.body.eventDate;

    new Event(eventBody).save().then(event => res.json(event));
});

// PATCH /api/events/:id/update
// update event
router.patch('/:id/update', passport.authenticate('jwt', { session: false }), (req, res) => {

    Event.findById(req.params.id)
        .then(event => {
            if(event){
                if (req.body.eventName) event.eventName = req.body.eventName;
                if (req.body.eventType) event.eventType = req.body.eventType;
                if (req.body.quota) event.quota = req.body.quota;
                if (req.body.location) event.location = req.body.location;
                if (req.body.description) event.description = req.body.description;
                if (req.body.img) event.img = req.body.img;
                if (req.body.eventDate) event.eventDate = req.body.eventDate;

                return event.save().then(event => res.json(event));;
            }
            else{
                res.status(404).json({ error: "Event not found" });
            }
        });
    
});


// PUT /api/events/<:event_id>/join
// add player to the event
router.put('/:id/join', passport.authenticate('jwt', { session: false }), (req, res) => {
    Event.findById(req.params.id)
        .populate('user', ['name'])
        .then(event => {
            if (!event) {
                return res.status(404).json({ error: 'This event is not found' });
            }

            let count = 0;

            for (let i of event.participants) {
                if (i["id"] === req.user.id) {
                    return res.status(400).json({ error: 'You already join this event' });
                }
                count++;
            }

            if (count >= event.quota) {
                return res.status(400).json({ error: 'This event is full' });
            }

            const userName = req.user.name;

            const newParticipant = {
                id: req.user.id,
                name: userName
            };


            event.participants.push(newParticipant);
            return event.save();
        })
        .then(result => {
            res.status(200).json({
                success: true,
                event: result
            });
        })
        .catch(err => res.status(500).json({ error: "Error in put api/events/:id/join " + err }));
});


// DELETE /api/events/<:event_id>
// delete an event
router.delete('/:id/delete', passport.authenticate('jwt', { session: false }), (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            if (event.host.toString() !== req.user.id) {
                return res.status(401).json({ error: 'You are not authorized' });
            }
            event.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(500).json({ error: "Error in delete api/events/:id " + err }));
});


// GET /api/events/
// fetch all events or events with given event type
router.get('/', (req, res) => {
    Event.find(req.query.eventType ? { eventType: req.query.eventType } : {})
        .sort('-createDate')
        .populate('user', ['name'])
        .then(events => {
            res.json(events);
        })
        .catch(err =>
            res.status(404).json({ error: "Error in get api/events/ " + err })
        );
});

module.exports = router;