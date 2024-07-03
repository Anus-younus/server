const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        request: true
    },
    email: {
        type: String,
        request: true
    },
    phone: {
        type: String,
        request: true
    },
    password: {
        type: String,
        request: true
    },
    isAdmin: {
        type: Boolean,
        request: true
    }
})

userSchema.pre('save', async function(next){
    console.log("pre method", this);

    const user = this
    if(!user.isModified('password')){
        next()
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

const User = new mongoose.model('User', userSchema)

module.exports = User;