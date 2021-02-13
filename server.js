const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const todos = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'my-app/dist')));

app.get('/api/todos', (req, res) => {
  console.log('api/todos called!!!!!!!')
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo = req.body.todo;
  todo.id = randomId(10);
  console.log('Adding todo:::::', todo);
  todos.push(todo);
  res.json("todo addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});