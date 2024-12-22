const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User registration route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// User login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Implement login logic here
    res.status(200).json({ message: 'User logged in successfully' });
});

module.exports = router;
