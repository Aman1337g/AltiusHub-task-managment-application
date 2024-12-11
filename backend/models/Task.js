// schema for task structure
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    status: {type: String, enum: ['Pending', 'Completed'], default: 'Pending'},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports = mongoose.model('Task', TaskSchema)