// Implementing JWT middleware
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorisation');
    if(!token) return res.status(401).json({message: 'Unauthorized'});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err) {
        res.status(400).json({message: 'Invalid Token'});
    }
}