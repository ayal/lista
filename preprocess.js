var config        = require('./config'),
FB = require('fb');

if(!config.facebook.appId || !config.facebook.appSecret) {
    throw new Error('facebook appId and appSecret required in config.js');
}

FB.api('santakatarina2', {fields: 'About', access_token:'1616992805231820|hqB6t7IxNhehM5LToLE07M0oJ1A'}, function (res) {
  if(!res || res.error) {
   console.log(!res ? 'error occurred' : res.error);
   return;
  }
  console.log(res.id);
  console.log(res.name);
});
