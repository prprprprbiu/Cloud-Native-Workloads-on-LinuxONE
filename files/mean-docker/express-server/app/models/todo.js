var mongoose = require('mongoose');

// Define the schema
module.exports = mongoose.model('Todo', {
    pwd: {
        type: String,
        default: ''
    }
});
