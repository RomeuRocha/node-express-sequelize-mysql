module.exports = app => {
    const task = require('../controllers/task.controller')

    var router = require("express").Router();

    // Create a new Tutorial

    router.post('/task', task.create);

    //Find all tasks
    router.get('/task', task.findAll);

    // Find by ID
    router.get("/task/:id", task.findOne);

    // Update a task
    router.put("/task/:id", task.update);

    router.delete("/task/:id", task.delete);

    app.use('/', router);


};