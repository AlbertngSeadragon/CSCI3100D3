const Event = require('../models/Event');
const User = require('../models/User');

// POST /api/events
// create a new event
createEvent = (req, res) => {
    const body = req.body;
    body.host = req.user.id;
    User.findById(req.user.id, (err, doc) => {
        if(err) throw err;
        body.hostName = doc.name;
    });
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an event'
        });
    }

    const event = new Event(body);

    if (!event) {
        return res.status(400).json({ success: false, error: "Event not created!" });
    }

    event
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: event._id,
                message: 'Event created!',
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err,
                message: 'Event not created!'
            });
        });
}

// PUT /api/events/:id
// update event given by id
updateEvent = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    Event.findOne({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(404).json({
                error: err,
                message: 'Event not found!',
            });
        }
        if (event.host.toString() !== req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'You are not authorised',
            });
        }
        if (body.eventName) event.eventName = body.eventName;
        if (body.eventType) event.eventType = body.eventType;
        if (body.date) event.date = body.date;
        if (body.quota) event.quota = body.quota;
        if (body.img) event.img = body.img;
        if (body.location) event.location = body.location;
        if (body.description) event.description = body.description;
        event
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: event._id,
                    message: 'Event updated!',
                })
            })
            .catch(err => {
                return res.status(404).json({
                    error: err,
                    message: 'Event not updated!',
                })
            })
    })
}

// DELETE /api/events/:id
// delete event given by id
deleteEvent = async (req, res) => {
    await Event.findOne({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: 'Event not found' })
        }
        if (event.host.toString() !== req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'You are not authorised',
            });
        }
        event.remove().then(() => {
            return res.status(200).json({ success: true })
        });
    }).catch(err => console.log(err));
}

// GET /api/events/:id
// fetch an event given by id
getEventById = async (req, res) => {
    await Event.findOne({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: 'Event not found' })
        }
        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err));
}

// GET /api/events/
// or /api/events?eventType=${type}
// fetch all events or events given by type
getEvents = async (req, res) => {
    await Event.find(req.query.eventType ? {eventType: req.query.eventType} : {}).sort('-createdAt').then(events => {
        if (!events) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!events.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Event not found' });
        }
        return res.status(200).json({ success: true, data: events })
    }).catch(err => console.log(err));
}

// PUT /api/events/:id/join
// add participant to the event given by id
joinEvent = (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            if (!event) {
                return res.status(404).json({ success: false, error: 'This event is not found' });
            }

            let count = 0;

            for (let i of event.participants) {
                if (i.user.toString() === req.user.id) {
                    return res.status(400).json({ success: false, error: 'Already joined this event' });
                }
                count++;
            }

            if (count >= event.quota) {
                return res.status(400).json({ success: false, error: 'This event is full' });
            }

            const participant = {
                user: req.user.id,
                name: req.user.name
            };


            event.participants.push(participant);
            event.numOfParticipants = event.numOfParticipants + 1;
            return event.save();
        })
        .then(newEvent => {
            res.status(200).json({
                success: true,
                event: newEvent
            });
        })
        .catch(err => console.log(err));
}

// GET /api/events/trending
// fetch top three trending events (trending defined by number of participants in event)
getTrending = (req, res) => {
    Event.find().sort('-numOfParticipants').limit(3).exec((err, result) => {
        if(err) return res.status(400).json({ success: false, error: err })
        return res.status(200).json({ success: true, data: result });
    });
}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
    joinEvent,
    getTrending
}