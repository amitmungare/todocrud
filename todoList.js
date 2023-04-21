
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    description:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model('todoList', todoSchema);

// exporting the todo
module.exports = Todo;