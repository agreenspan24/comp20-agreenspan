var express = require('express');
var app = express();
var bodyParser = require('body-parser');
json = require('express-json');
var SendGrid = require('sendgrid')('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');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/Limitlist';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var ObjectId = require('mongodb').ObjectID;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

//gets search queries from client side, stores in mongo
app.post('/sendData', function(request, response) {
  	var login = request.body.Name;
	var email = request.body.email;
	var duration = parseInt(request.body.duration, 10);
	var genre = request.body.genre;

	if (login==undefined||login==""||email==undefined||email==""||
		duration==NaN||duration==""||genre=="(Select One)"||genre==""){
		var html = "<!DOCTYPE HTML><html><head><title>Your Request Is Being Processed</title></head><body><p>Whoops, there was something wrong with your data. Redirecting back to the homepage...</p><script>setTimeout(function(){location.href = 'https://tuftsdev.github.io/comp20-f2015-team19/index.html';}, 5000);</script></body></html>"
		response.send(html);
	}
	var toInsert = {"login": login, "email": email, "duration": duration, "genre": genre};
	db.collection('user_info').insert(toInsert);

	var msg = "Hello "+login+"!\n\nWelcome to Limitlist!\n\nYou ordered a LimitList on of "+duration+" minutes in the genre "+genre+".\n\nYou can access your list at https://tuftsdev.github.io/comp20-f2015-team19/playlists.html.\n\nEnjoy your LimitList!\n\nThe LimitList Team";

	SendGrid.send({
	  to:       email,
	  from:     'Barack.Obama@limitlist.com',
	  subject:  'Thank You for Using Limitlist',
	  text:     msg
	});

	var html = "<!DOCTYPE HTML><html><head><title>Your Request Is Being Processed</title></head><body><p>Finding Tracks...</p><script>setTimeout(function(){location.href = 'https://tuftsdev.github.io/comp20-f2015-team19/playlists.html';}, 2000);</script></body></html>"

	response.send(html);
});


app.get('/getInfo', function(request, response, next){
	var Login = request.query.login;
	//console.log(Login);
	db.collection('user_info').find({login: Login}).toArray(function(error, data){
		//console.log(data);
		most_recent = data[data.length-1];
		console.log(most_recent);
		if(most_recent == null){
			response.send("login does not exist");
		}
		else{
			response.send(most_recent);
		}
	});
});

app.get('/getGenreInfo', function(request, response, next){
	console.log("me");
	response.type('json'); 
	var Genre = request.query.genre;
	db.collection('user_info').find({genre: Genre}).toArray(function(error, data){
		Count = data.length;
		response.send({Count: count});
	});
});




app.post('/help', function(req, res, next){
	var login = req.body.login;
	var email = req.body.email;
	var problem = req.body.problem;

	var toInsert = {"login": login, "email": email, "problem": problem};
	db.collection('problems').insert(toInsert);

	var subject = "Limitlist problem from "+login;

	SendGrid.send({
	  to:       'agreenspan24@gmail.com',
	  from:     email,
	  subject:  subject,
	  text:     problem
	});

	res.set('Content-Type', 'text/html');

	var redirect = '<!DOCTYPE HTML><html><head><title>Your Request Is Being Processed</title></head><body><p>Your request is being processed. Redirecting to the home page...</p><script>setTimeout(function(){location.href = "https://tuftsdev.github.io/comp20-f2015-team19/index.html";}, 5000);</script></body></html>';

	res.send(redirect);
});

app.use('/LimitList', express.static(__dirname + '/index1.html'));
app.use('/callback', express.static(__dirname + '/callback.html'));

app.listen(process.env.PORT || 5000);
