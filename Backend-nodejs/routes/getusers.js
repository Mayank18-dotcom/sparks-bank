const User = require('../models/user');
module.exports = (req,res)=>{
    User.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
} 
