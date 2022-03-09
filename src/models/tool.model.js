const mongoose = require('mongoose');
const toolSchema = mongoose.Schema({
    ImageCode: {
        type: String,
    },
    Name: {
        type: String,
    },
    Link: {
        type: String,
    },
    Position: {
        type: String,
    },
    ImageLink: {
        type: String,
    },
    APILink: {
        type: String,
    },
    ColorType: [{
        type: String,
    }],
    ImageName: [{
        type: String,
    }],
    FriendlinessLevel: [{
        type: String,
    }]
});

module.exports = mongoose.model('Tool', toolSchema);