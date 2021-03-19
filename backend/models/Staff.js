const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StaffSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: ['M', 'F', 'N/A'],
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    staffID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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