const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const router = express.Router();

router.post('/register', upload.single('profileImage'), async(req,res) => {
    try {
        const {username, email, password} = req.body;
        const user = new User({username, email, password, profileImage: req.file.path});
        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.post('/login', async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email});
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({message: 'Invalid credentials'});
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.json({token, user});
});

module.exports = router;