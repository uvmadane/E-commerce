const User = require('../model/userModel');
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = "your_secret_key";


exports.registerUser = async (req, res) => {
    try {
        const { firstName,lastName,contact,username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Please provide all required fields.' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists.' });
        }
        const existingUser1 = await User.findOne({ contact });
        if (existingUser1) {
            return res.status(400).json({ error: 'User with this mobile no already exists.' });
        }
        const existingUserId = await User.findOne({ username });
        if (existingUserId) {
            return res.status(400).json({ error: 'User with this UserId already exists.' });
        }

        const newUser = new User({firstName,lastName,contact, username, email, password });
        await newUser.save();

        // const accessToken = jwt.sign({ userId: User._id }, secretKey, {
        //     expiresIn: '1h', // Adjust the expiration time as needed
        // });
        console.log(newUser)
        res.status(200).json({ message: 'Registered  successfully' ,data:newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Please provide both email and password" });
        }

        // Make sure to use the correct path for importing the User model
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        console.log(user)

        const accessToken = jwt.sign({ userId: user._id }, secretKey, {
            expiresIn: '1h', // Adjust the expiration time as needed
        }); 
        res.status(200).json({ message: 'Login successful', data:user, accessToken, status:true });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



exports.protected= (req,res)=>{
    res.json({ message: 'You have access to this protected route.', user: req.user });
}
    // Access the authenticated user via req.user
    
  