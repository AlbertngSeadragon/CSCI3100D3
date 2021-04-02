// const mongoose = require('mongoose');
// const Student = require('./Student');
// const Schema = mongoose.Schema;

// const AutoIncrement = require('mongoose-sequence')(mongoose);
// const EventSchema = new Schema({
//     creator: {
//         type: Schema.Types.ObjectId,
//         required: true,
//         refPath: 'onModel'
//     },
//     onModel: {
//         type: String,
//         required: true,
//         enum: ['students', 'admins', 'staff']
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     rating: {
//         type: Number,
//         default: undefined
//     },
//     quota: {
//         type: Number,
//         required: true
//     },
//     isActive: {
//         type: Boolean,
//         required: true,
//         default: true
//     },
//     participants: {
//         type: [Student],
//         default: undefined
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         default: ""
//     },
//     image: {
//         data: Buffer,
//         contentType: String
//     },
//     comments: [
//         {
//             commenterID: {
//                 type: Schema.Types.ObjectId,
//                 refPath: 'senderModel'
//             },
//             commenterModel: {
//                 type: String,
//                 required: true,
//                 enum: ['students', 'admins', 'staff']
//             },
//             commentText: {
//                 type: String,
//                 required: true
//             },
//             commenterName: {
//                 type: String
//             },
//             date:{
//                 type: Date,
//                 default: Date.now
//             }
//         }
//     ],
//     chatroom: [
//         {
//             messagerID: {
//                 type: Schema.Types.ObjectId,
//                 refPath: 'senderModel'
//             },
//             messagerModel: {
//                 type: String,
//                 required: true,
//                 enum: ['students', 'admins', 'staff']
//             },
//             message: {
//                 type: String,
//                 required: true
//             },
//             messagerName: {
//                 type: String
//             },
//             date:{
//                 type: Date,
//                 default: Date.now
//             }            
//         }
//     ],
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });
// EventSchema.plugin(AutoIncrement, {inc_field: 'id'});

// module.exports = Event = mongoose.model('event', EventSchema);