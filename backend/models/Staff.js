const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StaffSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: ['M', 'F', 'N/A'],
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    staffID: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});


module.exports = Staff = mongoose.model('staff', StaffSchema);