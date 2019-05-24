var mongoose = require('mongoose');

var BankSchema = new Schema({
    customer: {
        customer_id: Number,
        name: String,
        password: String,
        account_id: Number,
        balance: Number,
    }
});

module.exports = mongoose.model('Bank', BankSchema);

// Database: Bank

// Table 1: Customer
// Attr 1: customer_id -> int
// Attr 2: name -> string
// Attr 3: password -> string
// Attr 4: account_id -> int [FOREIGN KEY]

// Table 2: Account
// Attr 1: account_id -> int
// Attr 2: balance -> double