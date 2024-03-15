const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contact:{
       type:Number,
       required:true,
       unique:true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        unique:true
    },
});

userSchema.pre('save',async function(next){

    const user=this;
    if(user.isModified('password') || user.isNew){
        try{
            const hashedpassword=await bcrypt.hash(user.password,10);
            user.password=hashedpassword;
            next();
        }catch(error){
            return next(error);
        }
    }else{
        return next();
    }
})



const User = mongoose.model('User', userSchema);

module.exports = User;
