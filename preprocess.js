var config        = require('./config'),
_ = require('lodash');
FB = require('fb');


FB.api('santakatarina2?fields=about,hours,name,location', {access_token:config.at}, function (res) {
  if(!res || res.error) {
   console.log(!res ? 'error occurred' : res.error);
   return;
  }
  console.log(res);

});
