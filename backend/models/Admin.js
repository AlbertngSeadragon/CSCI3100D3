const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const AdminSchema = new Schema({
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
    // birth_date: {
    //     type: Date,
    //     required: true
    // },
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