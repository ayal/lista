var http = require('https');


var fsr = function(p,cb) {
    //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    var options = {
        hostname: 'api.foursquare.com',
        protocol:'',
        path: '/v2' + p + '?client_id=HFHAXKBQ4SVNUO1F4W0ENKAJSHS23BXBWTZRSDGSINEVV3SY&client_secret=TSYUTEJPYWPFXBGYUI3MOBQOXHDIQMAZGPZRUA40V5SUKXI4&v=20150101',
        headers: { 'Content-Type': 'application/json' }
    };

    var callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            var r = JSON.parse(str);
            cb(r);
        });
    };
    http.request(options, callback).end();
};

fsr('/lists/560a3c57498ec514a7279631',
    function(x){
	
       var items = x.response.list.listItems.items;
       var all = [];
	items.forEach(function(x){
	    var name = x.venue.name;
           fsr('/venues/' + x.venue.id,
               function(x){
//		   console.log(name.match('elix'));
                   all.push(x.response);
                   if (all.length === items.length) {
                       console.log(JSON.stringify(all));
                   }
               });
       });
   });
