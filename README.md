# To-Do List API

This is a simple To-Do List REST API built using Node.js and Express. It allows you to create, read, update, and delete to-do items. The data is stored in-memory, so it will be reset every time the server is restarted.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jeeraphanl/todo-list-api.git
   cd todo-list-api

2. Install the dependencies:
    ```bash
    npm install

3. Run the Server
    ```bash
    node server.js

### Example Requests
You can test the API using tools like Postman or curl.

1. Get all todos
    ```bash
    curl -X GET http://localhost:3000/todos

2. Create a new todo
    ```bash
    curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"Buy groceries", "description":"Milk, Bread, Butter"}'

3. Get a specific todo
    ```bash
    curl -X GET http://localhost:3000/todos/1

4. Update a todo
    ```bash
    curl -X PUT http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"title":"Buy groceries", "description":"Milk, Bread, Butter, Eggs"}'

5. Delete a todo
    ```bash
    curl -X DELETE http://localhost:3000/todos/1
