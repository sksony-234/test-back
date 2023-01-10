const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const todoSchema = mongoose.Schema({
    title: { type: String },
})

const todoModel = mongoose.model('Todo', todoSchema)
export default todoModel
