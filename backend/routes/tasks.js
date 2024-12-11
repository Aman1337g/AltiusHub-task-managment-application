const express = require('express');
const Task = require('../models/Task')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/', authMiddleware, async(req, res) => {
    try {
        const task = new Task({...req.body, userId: req.userId});
        await task.save();
        res.status(201).json(task);
    } catch(err) {
        res.status(400).json({message: err.message});
    }
});

router.get('/', authMiddleware, async(req, res) => {
    const tasks = await Task.find({userId: req.userId});
    res.json(tasks)
});

module.exports = router;