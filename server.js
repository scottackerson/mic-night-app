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

lirc_node.init();

app.get('/api/songs/play/:track', function(req, res) {
    var track = req.params.track;
    playTrack(track);
    res.setHeader('Cache-Control', 'no-cache');
    res.send(200);
});

app.get('/api/remote/karaoke/USBMode', function(req, res) {
    console.log('toggle USBMode');
});

function playTrack(track) {
    if (track) { 
        var i = 0;
        var interval = function() {
            if (track[i]) {
                var command = track[i];
                lirc_node.irsend.send_once('karaoke', command[0], function() {});
                console.log("Sent " + command);
            } else {
                clearInterval(interval);
            }
            i += 1;
        };
        setInterval(interval, 200);
    }
};

app.listen(port);
console.log('Music happens on port ' + port);
