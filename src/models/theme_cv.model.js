const mongoose = require('mongoose');
const themeCvSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 250,
        require: true
    },
    image: {
        type: String,
        maxLength: 1000,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: true
    },
    dateEdit: {
        type: Date,
        default: Date.now()
    },
    type: {
        type: String,
        default: ''
    },
    bin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('ThemeCv', themeCvSchema);