const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const AdminSchema = new Schema({
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
        default: "admin"
    },
    createTime: {
        type: Date,
        default: Date.now
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
AdminSchema.plugin(AutoIncrement, {inc_field: 'id'});


module.exports = Admin = mongoose.model('admins', AdminSchema);