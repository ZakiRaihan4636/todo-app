const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Dummy data for tasks
let tasks = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add-task', (req, res) => {
    const taskText = req.body.taskText.trim();
    if (taskText) {
        tasks.push(taskText);
    }
    res.redirect('/');
});

app.post('/remove-task', (req, res) => {
    const taskIndex = parseInt(req.body.taskIndex, 10);
    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
