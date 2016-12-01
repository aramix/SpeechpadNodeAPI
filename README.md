APILite
=======

NodeJS port of https://github.com/Speechpad/APILite wrapping the Speechpad API functionality.

## Installation

```shell
$ npm install speechpad
```

## Config

### Creating configuration files for development and production

This package depends on the config package for configuration.

To create a basic configuration do the following
```shell
$ mkdir config
$ vi config/default.json
```

```json
{
  "rest_uri": "http://dev.speechpad.com/services",
  "access_key": "sandbox_test_key",
  "secret_key": "sandbox_test_secret"
}
```

**Edit config overrides for production deployment:**

```shell
 $ vi config/production.json
```

```json
{
  "rest_uri": "https://www.speechpad.com/services",
  "access_key": "production_test_key",
  "secret_key": "production_test_secret"
}
```

## Usage Examples

### Instantiating the class

```js
const APILite = require('speechpad');
// no further configuration is needed
```

### Making a test call

```js
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
```

## Using the Pre-made Example Scripts

There are a handful of example scripts inside the package directory (`node_modules/speechpad/examples`) provided to illustrate some basic usage of the Speechpad API.

All examples below assume:

 - you have valid keys in config/default.json (for sandbox) or config/production.json (for production)
 - are running the scripts on a web server
 - are making requests to the examples provided

**NOTE: We recommend running the examples against the sandbox endpoint only.  Any usage against the production endpoint may result in your account being invoiced or charged.**

### test

```shell
$ node examples/test
```

### add_media_url

```shell
$ node examples/add_media_url "https://www.speechpad.com/is_a.mp3"
```

(Replace https://www.speechpad.com/is_a.mp3 with a public URL to your own media.)

### transcription_status

```shell
$ node examples/transcription_status "12345,12346"
```

(Replace "12345,12346" with the ID (or comma-separated list of IDs) of the media you are checking.)

### get_transcript

```shell
$ node examples/get_transcription "12345"
```

(Replace 12345 with **single** media ID.)