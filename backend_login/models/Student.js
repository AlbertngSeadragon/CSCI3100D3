const mongoose = require('mongoose');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
//const bcrypt = require('bcrypt');
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
/*StudentSchema.plugin(AutoIncrement, {inc_field: 'id'});

StudentSchema.pre('save', function(next) {
    var student = this;
    if (!student.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(student.password, salt, function(err, hash) {
            if (err) return next(err);
            student.password = hash;
            next();
        });
    });
});
     
StudentSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
*/
module.exports = Student = mongoose.model('students', StudentSchema);