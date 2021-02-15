var mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "balance":{type:Number}
})

const User = mongoose.model("User",UserSchema);
module.exports = User;
