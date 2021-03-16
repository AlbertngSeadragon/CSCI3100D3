const mongoose = require('mongoose');
const Student = require('./Student');

const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const EventSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['students', 'admins', 'staff']
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    quota: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    participants: {
        type: [Student],
        default: undefined
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    },
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                refPath: 'onModel'
            },
            onModel: {
                type: String,
                required: true,
                enum: ['students', 'admins', 'staff']
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            date:{
                type: Date,
                default: Date.now
            }
        }
    ],
    chatroom: {

    },
    date: {
        type: Date,
        default: Date.now
    }
});
EventSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = Event = mongoose.model('event', EventSchema);