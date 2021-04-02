const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema(
    {
        eventName: { type: String, required: true },
        eventType: { type: String, required: false },
        date: { type: Date, required: true },
        quota: { type: Number, required: true },
        img: { type: String, required: false },
        location: { type: String, required: true },
        description: { type: String, required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('events', Event);