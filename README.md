mic-night-app
=============

Mic-night is a karaoke library visual interface written with [nodjs](http://nodejs.org), [Angular](https://angularjs.org), and [lirc_node](https://github.com/alexbain/lirc_node).

The application reads a song library and displays a simple list of artists and tracks.  It uses [lirc_node](https://github.com/alexbain/lirc_node) to send the tracks to a karaoke machine via infrared signals.

## Installation

You'll need [LIRC](http://lirc.org) and [nodejs](http://nodejs.org) installed and configured on the host machine.  The LIRC remote .conf files must contain the appropriate codes for remote commands 0-9 using the namespaces of 0-9 (not KEY_0...KEY_9).

Installing mic-night:

	git clone https://github.com/scottackerson/mic-night-app
	cd mic-night-app
	npm install
	node server.js

Open ''http://server:3000/'' in a web browser.

#### Example songs.json
TODO

#### Credits
[Alex Bain](http://alexba.in/) has provided all inspiriation and tutorials for building and configuring a raspberry pi device as the machine that hosts the application in his [Open Source Universal Remote](http://opensourceuniversalremote.com/) project.  He is also the author of [lirc_node](https://github.com/alexbain/lirc_node).  
