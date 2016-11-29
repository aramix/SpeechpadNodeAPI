const config	= require('config');
const colors 	= require('colors/safe');
const Speechpad	= require('./speechpad');

const env = process.env.NODE_ENV;

if (!env) {
	console.log(colors.white(colors.yellow('Warning:'), 'environment var', colors.green('NODE_ENV'), 'not set.'));
	console.log(colors.green('Assuming this is a', colors.yellow('development'), 'environment and using', colors.underline('config/default.json\n')));
}
if (!config.get('access_key') || !config.get('secret_key')) {
	console.log(colors.white(colors.red('ERROR:'), 'access_key and/or secret_key are missing or not configured in ' + (env === 'production' ? colors.yellow('config/production.json') : colors.yellow('config/default.json'))));
	process.exit();
}

const restURI = config.get('rest_uri');		// Speechpad API Endpoint
const accessKey = config.get('access_key');	// Customer's access_key
const secretKey = config.get('secret_key');	// Customer's secret_key - Used for signing.  Do not send this along with your API requests

module.exports = new Speechpad.APILite(accessKey, secretKey, restURI);