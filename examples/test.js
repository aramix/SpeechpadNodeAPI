const APILite = require('../bootstrap');

/** TEST CALL **/
console.log('Begin test Call');

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
/** TEST CALL **/