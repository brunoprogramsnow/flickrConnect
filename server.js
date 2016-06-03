
var express = require('express');
var bodyParser = require('body-parser');


var app = express();



//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.post('/authenticate', function(req,res){ 
	console.log(req.body) 
	res.json(req.body) 


}); 

app.get('/', function(req,res){ 
	res.render('index.html')

});

var port = process.env.PORT || 3000;
app.listen(port);
