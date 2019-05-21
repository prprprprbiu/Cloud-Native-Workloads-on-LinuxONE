var mongoose = require('mongoose');

// Define the schema
module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }
});

// Database: Bank

// Table 1: Customer
// Attr 1: customer_id -> int
// Attr 2: name -> string
// Attr 3: password -> string
// Attr 4: account_id -> int [FOREIGN KEY]

// Table 2: Account
// Attr 1: account_id -> int
// Attr 2: balance -> double