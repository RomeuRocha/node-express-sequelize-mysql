module.exports = app => {
    const task = require('../controllers/task.controller')

    var router = require("express").Router();

    // Create a new Tutorial
    
    router.post('/task', task.create);

    app.use('/', router);
    

};