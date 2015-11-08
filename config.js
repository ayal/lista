
var config = { };

// should end in /
config.rootUrl  = process.env.ROOT_URL                  || 'http://localhost:8080/';

config.facebook = {
    appId:          process.env.FACEBOOK_APPID          || '1616992805231820',
    appSecret:      process.env.FACEBOOK_APPSECRET      || '2e693d81c4747f0bcd8ec7d0521ede85',
    appNamespace:   process.env.FACEBOOK_APPNAMESPACE   || 'lilista',
    redirectUri:    process.env.FACEBOOK_REDIRECTURI    ||  config.rootUrl
};

config.appat = '1616992805231820|hqB6t7IxNhehM5LToLE07M0oJ1A';
config.at = 'CAALrKDxmIxwBAB5L1XmrcebrZBjny0FdIiyZCESw2DW7p532AOdZCoFhCB5xdoboiURMuJQZClZC7hGgJxDUZAmAx67r7ooqrZAC7qsorWbN6qvtS71vjICnxmaFUEnGzLZB9mbLCQ1qgnYGmwKkxMufB5jmzx83IpGOJAmPvlxhifP9N72l873u6NIA7orZCA74ZD';

config.googleapi = 'AIzaSyA1S9p6LMOoOKrm3-FWZktpqF1sBN17Tro';
config.yandexkey = 'trnsl.1.1.20150921T102601Z.d083203da50a2ba1.8ae25422eaca35b522d4a8e90bec07eb2aacd62f';

module.exports = config;
