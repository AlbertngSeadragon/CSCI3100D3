const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: ['M', 'F', 'N/A'],
        required: true
    },
    role: {
        type: String,
        default: "student"
    },
    yearOfStudy: {
        type: String,
        enum: ["Year 1", "Year 2", "Year 3", "Year 4"],
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    studentID: {
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
    major: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});


module.exports = Student = mongoose.model('students', StudentSchema);