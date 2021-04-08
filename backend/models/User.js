const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'admin']
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verificationKey: { 
        type: String, 
        required:true 
    },
    emailVerified: { 
        type: Boolean, 
        required:true, 
        default: false 
    },
},
    { timestamps: true }
);

module.exports = User = mongoose.model('users', UserSchema);