const Transactions = require('../models/transactions');
module.exports = (req,res)=>{
    Transactions.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
} 
 
