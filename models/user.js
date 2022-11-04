const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        required: [true, 'Username cannot be blank'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank'],
    },
    longitutde: {
        type: Number
    },
    latitude: {
        type: Number
    }
    
})

module.exports = mongoose.model ("User", userSchema);