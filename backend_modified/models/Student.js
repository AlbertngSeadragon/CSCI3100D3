const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;
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
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
/*
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
        type: Number,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    studentID: {
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
    major: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});*/

module.exports = Student = mongoose.model('students', StudentSchema);