// server.js

var express    		= require('express'); 		
var app        		= express(); 				
var bodyParser 		= require('body-parser');
var morgan     		= require('morgan');
var methodOverride 	= require('method-override');
var lirc_node  		= require('lirc_node');

app.use(bodyParser.urlencoded({ extended: true })); // this will let us get the data from a POST
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

var port = process.env.PORT || 8080; 		

if (process.env.NODE_ENV == 'test') {
    lirc_node.remotes = require(__dirname + '/config/remotes.json');
    config = require(__dirname + '/config/config.json');
} else {
    lirc_node.init();
}

app.get('/', function(req, res) {
        res.sendfile('./public/index.html');
    });

app.get('/:artist/songs', function(req, res) {
		res.sendfile('./public/artistsongs.html');
	});

app.get('/songs', function(req, res) {
		res.sendfile('./public/songs.html');
	});

// START THE SERVER
app.listen(port);
console.log('Music happens on port ' + port);
