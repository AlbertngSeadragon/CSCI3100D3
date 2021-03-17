const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
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

StaffSchema.pre('save', function(next) {
    var staff = this;
    if (!staff.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(staff.password, salt, function(err, hash) {
            if (err) return next(err);
            staff.password = hash;
            next();
        });
    });
});

StaffSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = Staff = mongoose.model('staff', StaffSchema);