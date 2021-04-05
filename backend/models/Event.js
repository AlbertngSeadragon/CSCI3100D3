const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema(
    {
        host: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        eventName: { 
            type: String, 
            required: true 
        },
        eventType: { 
            type: String, 
            required: true 
        },
        createDate: { 
            type: Date, 
            default: Date.now
        },
        eventDate: {
            type: Date,
            required: true
        },
        quota: { 
            type: Number, 
            required: true 
        },
        participants: [
            {
                id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                }
            } 
        ],
        img: { 
            type: String 
        },
        location: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },

    }
)

module.exports = mongoose.model('events', Event);