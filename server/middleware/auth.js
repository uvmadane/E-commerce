const jwt = require('jsonwebtoken');
const secretKey = "your_secret_key"; // Replace with your actual secret key
const user=require('../model/userModel');




const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. Token is missing.' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token.' });
        }
        
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;



