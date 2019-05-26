var mongoose = require('mongoose');

module.exports = mongoose.model('Bank', {
    customer: {
        customer_id: {type: Number, default: 233},
        name: {type: String, default: 'LotteWong'},
        password: {type: String, default: 'password'},
        account_id: {type: Number, default: 666},
        balance: {type: Number, default: 0.0},
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