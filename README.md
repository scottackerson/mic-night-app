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

The application has been tested using a Raspberry PI and an IR Transceiver (schematic can be found at [Alex Bain's](http://alexba.in/blog/2013/03/09/raspberrypi-ir-schematic-for-lirc/) project site). Any environment that is capable of meeting the deployment requirements and can  interface LIRC and an infrared transceiver should be able to host the applciation.

## Data files
The song list is a json file (song.json) in /public/data with the following format:
```
[
	{ 
		"_id" : 2344345, 
		"track" : 1, 
		"artist" : "Sinatra", 
		"name" : "New York" 
	},
	{ 
		"_id" : 234322, 
		"track" : 2, 
		"artist" : "Dean Martin", 
		"name" : "Ain't That A Kick In The Head" 
	}
]
```
Note: _id is not used in this application and will be fixed at some point.

Some [karaoke machines](https://www.amazon.com/Acesonic-213-Karaoke-Converter-Recording/product-reviews/B00AFJ820G) allow extracting the song library to a CSV.  A [csv->json converter](http://www.csvjson.com/csv2json) will help create the JSON structure from your CSV.

#### Credits
[Alex Bain](http://alexba.in/) has provided all inspiriation and tutorials for building and configuring a raspberry pi device as the machine that hosts the application in his [Open Source Universal Remote](http://opensourceuniversalremote.com/) project.  He is also the author of [lirc_node](https://github.com/alexbain/lirc_node).  
