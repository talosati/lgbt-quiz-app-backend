import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'player'
    },
    pointsOfUser: {
        type: Number,
        required: true,
        default: 0
    },
    registrationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
