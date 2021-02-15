var mongoose = require('mongoose'); 
const transactionSchema = new mongoose.Schema({
    "sender" : {type:String},
    "reciever" : {type:String}, 
    "amount" : {type:Number}
})

const Transactions = mongoose.model("Transactions",transactionSchema);
module.exports = Transactions;