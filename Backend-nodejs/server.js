var express =  require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoose.connect("mongodb+srv://admindb:admindatabase@cluster0-vlwic.mongodb.net/sparks",{ useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoose.set('useFindAndModify', false);

app.get('/',(req,res)=>{
    console.log("WORKING");
})

//routes
var getUsers = require('./routes/getusers')
app.use('/getusers',getUsers);

var postUsers = require('./routes/postusers');
app.use('/postusers',postUsers);

var getTransactions = require('./routes/gettransactions');
app.use('/getamount',getTransactions);

var transactions = require('./routes/maketransactions');
app.use('/postamount/:sender',transactions);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
