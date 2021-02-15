const User = require('../models/user');
module.exports = (req,res)=>{
    var user = {
        "name":req.body.name,
        "email":req.body.email,
        "balance":req.body.balance
    }
    User.create(user,(err,result)=>{
        if(err) res.json(err)
        else{
            res.json(result);
        }
    })
}