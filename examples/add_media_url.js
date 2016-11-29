const APILite = require('../bootstrap');

const url = process.argv[2];

const params = {
  'service_name': 'account',
  'service_version': '1.0.0',
  'format': 'json',
  'method': 'post',
  'operation': 'add_media_url',
  'url': url
};

APILite.call(params).then((res) => {
  console.log(res.data);
});