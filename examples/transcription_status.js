const APILite = require('../bootstrap');

const params = {
  'service_name': 'account',
  'service_version': '1.0.0',
  'format': 'json',
  'method': 'get',
  'operation': 'transcription_status',
  'audio_id': process.argv[2]
};

APILite.call(params).then((res) => {
  console.log(res.data);
});