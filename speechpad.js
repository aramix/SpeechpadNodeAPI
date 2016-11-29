'use strict'

const _           = require('lodash');
const ksort       = require('sort-object');
const axios       = require('axios');
const crypto      = require('crypto');
const querystring = require('querystring');

let Speechpad = {};

const pad = (number) => {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

Date.prototype.toISOString = function() {
  return this.getUTCFullYear() +
    '-' + pad(this.getUTCMonth() + 1) +
    '-' + pad(this.getUTCDate()) +
    'T' + pad(this.getUTCHours()) +
    ':' + pad(this.getUTCMinutes()) +
    ':' + pad(this.getUTCSeconds()) +
    'Z';
};

Speechpad.APILite = class APILite {
  constructor(accessKey, secretKey, restURI) {
		this._accessKey = accessKey;
		this._secretKey = secretKey;
    this._restURI = restURI;
	}

  _hmacSha1(s) {
    return crypto.createHmac('sha1', this._secretKey).update(s).digest('base64');
  }

	generateSignature(params) {
		if (!params['timestamp']) {
			params['timestamp'] = (new Date()).toISOString();
		}

		params = ksort(params);
		let s = _.values(params).join('');
		params['signature'] = this._hmacSha1(s);

		return params;
	}

	call(params) {
		let uri;

    params['access_key'] = this._accessKey;
		params = this.generateSignature(params);
    params = querystring.stringify(params);
    uri = this._restURI + '?' + params;

    return axios.get(uri);
	}
}

module.exports = Speechpad;
