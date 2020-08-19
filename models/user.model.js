const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
        required: true
    },
    password: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
        required: true
    }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;