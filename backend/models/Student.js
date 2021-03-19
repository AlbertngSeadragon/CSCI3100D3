const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
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
    year_of_study: {
        type: String,
        enum: ["Year 1", "Year 2", "Year 3", "Year 4"],
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    studentID: {
        type: String,
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