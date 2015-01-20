mic-night-app
=============

Mic-night is a karaoke library visual interface written with [nodejs](http://nodejs.org), [Angular](https://angularjs.org), and [lirc_node](https://github.com/alexbain/lirc_node).

The application reads a song library and displays a simple list of artists and tracks.  It uses [lirc_node](https://github.com/alexbain/lirc_node) to send the tracks to a karaoke machine via infrared signals.

## Installation

You'll need [LIRC](http://lirc.org) and [nodejs](http://nodejs.org) installed and configured on the host machine.  The LIRC remote .conf files must contain the appropriate codes for remote commands 0-9 using the namespaces of 0-9 (not KEY_0...KEY_9).

Installing mic-night:

	git clone https://github.com/scottackerson/mic-night-app
	cd mic-night-app
	npm install
	node server.js

Open ''http://server:3000/'' in a web browser.

## Data files
The song list is a json file (song.json) in /public/data with the following format:
'''
[
	{ 
		"_id" : { "$oid" : "54bdd6c9f4fc7f80f85d5448" }, 
		"track" : 1, 
		"artist" : Sinatra, 
		"name" : "New York" 
	},
	{ 
		"_id" : { "$oid" : "54bdd6c9f4fc7f80f85d5447" }, 
		"track" : 2, 
		"artist" : Dean Martin, 
		"name" : "Ain't That A Kick In The Head" 
	}
]
'''

Some karaoke machines allow extracting the song library to a csv.  Using [mongoDB](http://docs.mongodb.org/), it is simple to convert that csv to the json file:
* Install [mongo](http://docs.mongodb.org/manual/) (tested with Mongo 2.6.5)
* Create a csv with the following format: track, artist, name.
* If saving on a mac, use the format "Windows Comma Separated (csv)"
* Run mongoimport -d songs -c songs --type csv --file songs.txt --headerline
* Run mongoexport -d songs -c songs -f track,artist,name -o songs.json --jsonArray

#### Credits
[Alex Bain](http://alexba.in/) has provided all inspiriation and tutorials for building and configuring a raspberry pi device as the machine that hosts the application in his [Open Source Universal Remote](http://opensourceuniversalremote.com/) project.  He is also the author of [lirc_node](https://github.com/alexbain/lirc_node).  
