mic-night-app
=============

Mic-night is a karaoke library visual interface written with Node, Angular, and lirc_node.

The application reads a song library and displays a simple list of artists and tracks.  It uses [lirc_node](https://github.com/alexbain/lirc_node) to send the tracks to a karaoke machine.

## Installation

You'll need [LIRC](http://lirc.org) and [nodejs](http://nodejs.org) installed and configured on the host machine.

	git clone https://github.com/scottackerson/mic-night-app
	cd mic-night-app
	npm install
	node server.js

Open ''http://server:3000/'' in a web browser.

#### Example songs.json
TODO

#### Credits
[Alex Bain](http://alexba.in/) has provided all inspiriation and tutorials for building and configuring a raspberry pi device as the machine that hosts the application in his [Open Source Universal Remote](http://opensourceuniversalremote.com/) project.  He is also the author of [lirc_node](https://github.com/alexbain/lirc_node).  
