APILite
=======

NodeJS port of https://github.com/Speechpad/APILite wrapping the Speechpad API functionality.

## Installation

	npm install speechpad

## Usage Examples

### Instantiating the class

	const SpeechpadAPI = require('../bootstrap');
	APILite = new Speechpad.APILite(accessKey, secretKey, restURI);

	// Make a generic call (all parameters required for the call in params)
	APILite.call(params).then((res) => {
	  console.log(res.data);
	});

### Making a test call

	// see examples/test.js

	const params = {
	  'service_name': 'account',
	  'service_version': '1.0.0',
	  'format': 'json',
	  'method': 'get',
	  'operation': 'test',
	  'value': '123'
	};

	APILite.call(params).then((res) => {
	  console.log(res.data);
	});

## Using the Pre-made Example Scripts

There are a handful of example scripts provided to illustrate some basic usage of the Speechpad API.

All examples below assume:

 - you have valid keys in config/default.json (for sandbox) or config/production.json (for production)
 - are running the scripts on a web server
 - are making requests to the examples provided

**NOTE: We recommend running the examples against the sandbox endpoint only.  Any usage against the production endpoint may result in your account being invoiced or charged.**

### test

node examples/test

### add_media_url

node examples/add_media_url "https://www.speechpad.com/is_a.mp3"

(Replace https://www.speechpad.com/is_a.mp3 with a public URL to your own media.)

### transcription_status

node examples/transcription_status "12345,12346"

(Replace "12345,12346" with the ID (or comma-separated list of IDs) of the media you are checking.)

### get_transcript

node examples/get_transcription "12345"

(Replace 12345 with **single** media ID.)