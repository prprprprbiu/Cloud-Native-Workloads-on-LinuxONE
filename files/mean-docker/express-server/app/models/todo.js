var mongoose = require('mongoose');

// Define the schema
module.exports = mongoose.model('Todo', {
    id: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    balance: {
        type: Number,
        default: ''
    }
});
