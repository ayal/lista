var config        = require('./config'),
//translate
trans = require('yandex-translate')(config.yandexkey);



var _ = require('lodash'),
FB = require('fb'),
places = ['Tonyveesther','622591387867546','harsinai','uganda.tlv','203264193077701'];
objs = {};
finished = 0;

var days = ['mon','tue','wed','thu', 'fri','sat','sun'];

_.each(places, function(p) {
FB.api(p + '?fields=about,hours,name,location,description',
       {access_token:config.at}, function (res) {
           if(!res || res.error) {
               console.log(!res ? 'error occurred' : res.error);
               return;
           }

           if (!objs[res.name]) {
               objs[res.name] = {};
           }
           var obj = objs[res.name];
           obj.realhours = res.hours;
           var grps = _.groupBy(res.hours, function(v,k){
               var splt = k.split('_');
               return splt[0];
           });

           grps = _.map(grps, function(a,b){return [a[0] + '-' + a[1],b]})
           grps = _.groupBy(grps,  function(v){
               return  v[0];
           });
           var format = function(hgroup) {
               var consgrp = '';
               var ddx = days.indexOf(hgroup[0][1]) - 1;
               var ld = '';
               _.each(hgroup, function(hd){
                   var h = hd[0], d = hd[1];
                   if (days.indexOf(d) === ddx + 1) {
                       if (consgrp === '') {
                         consgrp += d;
                       }
                   }
                   else {
                       consgrp += '-' + ld + ' or ' + d;
                   }
                   ld = d;
                   ddx++;
               })
               return consgrp;
           };
           var hours = _.map(grps, function(a,b){return format(a) + ':' + a[0][0]  }).join(' | ');
           var map = 'https://www.google.com/maps?saddr=' + encodeURIComponent('Merhavia 19 Tel Aviv') +
                   '&daddr=' + res.location.latitude + ',' + res.location.longitude +
                   '&dirflg=w';
           var obj = _.extend(obj,{hours:hours,map:map,link:'http://facebook.com/' + p, text:''});

           trans.translate(res.about, {from:'he', to:'en'}, function(err, translation) {
               obj.tags = translation.text[0];
               trans.translate(res.name, {from:'he', to:'en'}, function(err, translation) {
                   obj.name = translation.text[0];
                   trans.translate(res.description, {from:'he', to:'en'}, function(err, translation) {
                       obj.text = translation.text[0];
                       finished++;
                       if (finished === places.length) {
                           console.log(_.values(objs));
                       }
                   });

               });

           });


       });
});
