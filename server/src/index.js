import { config } from 'dotenv'
import express from 'express'
const mongoose = require('mongoose');
import cors from 'cors'

import Todo from 'models/Todo'

config()

require('./db/database.js');

const app = express()

// // To parse the request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// // To handle cors error
app.use(cors())

app.get('/', (_, res) => res.send('Hello from Cules Coding'))

app.post('/addTodo', async (req, res) => {
    const { body } = req

    const newTodo = new Todo(body)
    const savedtodo = await newTodo.save()

    return res.send(savedtodo)
})

app.delete('/deleteTodo', async (req, res) => {
    const {
        body: { todoId },
    } = req

    const response = await Todo.findByIdAndDelete(todoId)
    return res.send(response)
})

app.get('/getAllTodos', async (_, res) => {
    const response = await Todo.find({})
    return res.send(response)
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on ${port}`))
