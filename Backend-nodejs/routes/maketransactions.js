const  Transactions = require('../models/transactions')
const User = require('../models/user');
module.exports = (req,res) =>{
    var sender = req.params.sender;
    var reciever = req.body.reciever;
    var amount = req.body.amount;
    var newTrans = {
        "sender":req.params.sender,
        "reciever":req.body.reciever,
        "amount":req.body.amount,
    }
    // console.log(newTrans.reciever);
    if(newTrans!=undefined)
    {
        User.find({"name":sender},(err,result)=>{
            if(err){
                res.json(err);
            }
            else{
                if(result[0].balance < amount){
                    res.json("Insufficient Funds !");
                }
                else if(amount<=0){
                    res.json("Negative or zero value of amount not allowed !");
                }
                else{
                    User.findOne({"name":sender},(err,result)=>{
                        if(err){
                            res.json(err);
                        }
                        else{
                            var bal = result.balance;
                            User.findOneAndUpdate({"name":sender},{$set : {balance : bal - amount}},(err,result)=>{
                                if(err){
                                    res.json(err);
                                }
                                else{
                                    User.findOne({"name":reciever},(err,result)=>{
                                        if(err){
                                            res.json(err);
                                        }
                                        else{
                                            var bal1 = result.balance;
                                            User.findOneAndUpdate({"name":reciever},{$set : {balance : bal1 + amount}},(err,result)=>{
                                                if(err){
                                                    res.json(err);
                                                }
                                                else{
                                                    Transactions.create(newTrans,(err,result)=>{
                                                        if(err){
                                                            res.json(err);
                                                        }
                                                        else{
                                                            res.json("Transaction Successfull !");
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            }
        })
    }
}
