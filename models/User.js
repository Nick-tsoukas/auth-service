const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    }
})