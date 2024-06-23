const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

let todos = [];
let idCounter = 1;

// Routes

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Get a single todo by ID
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Create a new todo
app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    const newTodo = { id: idCounter++, title, description };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo by ID
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = title;
        todo.description = description;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        res.json({ message: 'Todo deleted' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
