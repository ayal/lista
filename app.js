/* jsx */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, History, Lifecycle } from 'react-router';

import {lista} from './lista.js';
import {geo} from './geo.js';

window.lista = lista;

$(function(){

  var mapdiv = document.getElementById("map");
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
    var mapOptions = {
        zoom: 18,
        center: {lat: 32.0591797, lng: 34.771954},
        scrollwheel: true,

    };

    window.map = new google.maps.Map(document.getElementById("map"),
                                  mapOptions);
    window.infowindow = new google.maps.InfoWindow();
    window.directionsDisplay = new google.maps.DirectionsRenderer();
    window.directionsDisplay.setMap(map);
})

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}



function deg2rad(deg) {
  return deg * (Math.PI/180)
}

var fsGetHours = function(x){
    return x.venue.hours.timeframes.map(function(tf){return tf.days + ':' + tf.open.map(function(o){return o.renderedTime}).join(',')}).join('|');
}

var mergelistas = function(cb) {
    $.getJSON('fsdata.json?v=1', function(r){

        r.forEach(function(x){
            var match;
            lista.list.forEach(function(y){
                if (x.venue.name.toLowerCase().match(y.name.toLowerCase()) || y.name.toLowerCase().match(x.venue.name.toLowerCase()) || x.venue.id === y.orig) {
                    match = y;
                    console.log('match!', x.venue.name, y.name);
                }
            });
            match ? (match.tags = match.tags + ',' + x.venue.tags.join(',') + ',' + x.venue.categories.map(function(x){return x.name}).join(',')) : null;
            match = _.extend(match || {}, _.extend({name: x.venue.name,
                                                    link: x.venue.canonicalUrl,
                                                    tags: x.venue.tags.join(',') + ',' + x.venue.categories.map(function(x){return x.name}).join(','), text: x.venue.categories.map(function(x){return x.name}).join(',')}, match));
            if (x.venue.hours && !match.hours) {
                match.hours = fsGetHours(x);
            }
            match.tel = x.venue.contact.phone;
            match.address = x.venue.location.address;
            var daddr = x.venue.location.lat + ',' + x.venue.location.lng;
            var map = 'https://www.google.com/maps?&saddr=&daddr=' + encodeURIComponent(daddr) +
                    '&dirflg=w';
            match.map = map;
            if (lista.list.indexOf(match) === -1) {
                lista.list.push(match);
            }
	    match.x = x;
        });
        cb();
    });
};



var pos;
mergelistas(function(){
    if(geo.init()){
        geo.getCurrentPosition(function(p){
            pos = p.coords;
            console.log('pos', pos);
            _.map(lista.list, function(x){
                var xydist = getdist(x);
                if (xydist) {
                    x.dist = xydist.dist;
                    x.lat = xydist.lat;
                    x.lng = xydist.lng;
                }
            });
            xupdate();
        }, function(){console.log('error getting postion', arguments)});
    }
    else{
        alert("Functionality not available");
    }
    xupdate();
});

var getdist = function(x) {
    if (x && x.map && pos) {
        var rgx = (false) ?  /@(.*?)((%2C)|,)(.*?),/gim:  /daddr=(.*?)((%2C)|,)(.*?)&/gim;
            var match = rgx.exec(x.map);
            if (match) {
                var lat1 = parseFloat(match[1]);
                var lng1 = parseFloat(match[4]);
                var d = getDistanceFromLatLonInKm( lat1, lng1, pos.latitude, pos.longitude);
                if (d < 1) {
                    !x.tags.match('near') && (x.tags+=',near');
                }
                else if (d < 2) {
                    !x.tags.match('walking') && (x.tags+=',walking');
                }

                return {dist: (Math.round(d * 10) / 10).toFixed(1), lat: lat1, lng: lng1};
            }
        }
    };

var Listing = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidUpdate: function() {
        var x  = this.props.x;
        var that = this;
        this.marker && this.marker.setMap(null);
        if (x.lat) {
            var myLatLng = new google.maps.LatLng(x.lat, x.lng);

            this.marker = new google.maps.Marker({
                position: myLatLng,
                map: window.map,
                title: x.name
            });
            this.marker.addListener('click', function() {
                infowindow.setContent('<div><br><h3>' + x.name + '</h3><div>'+x.text+'</div></div>');
                infowindow.open(map, that.marker);
            });
        }
    },
    setCenter: function(){
	console.log(this.props.x);
        if (this.props.aside()) {
            return;
        }

        var x = this.props.x;
        if (x.lat) {
        var myLatLng = new google.maps.LatLng(x.lat, x.lng);
        window.map.setCenter(myLatLng);

        var that = this;
        infowindow.setContent(x.name);
        infowindow.open(map, this.marker);

            var directionsService = new google.maps.DirectionsService();
            var request = {
                origin: new google.maps.LatLng(pos.latitude, pos.longitude),
                destination:myLatLng,
                travelMode: google.maps.TravelMode.WALKING
            };
            directionsService.route(request, function(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                }
            });
        }

    },
    direct: function(e) {
        e.stopPropagation();
    },
    componentWillUnmount: function() {
        this.marker && this.marker.setMap(null);
    },
    render: function() {
        var that = this;
        var x = this.props.x;
        return (
                                       <div className={"listing " + this.props.cls} onClick={this.setCenter} style={{cursor:"pointer"}}>
                                       <div className="name">
                                       {x.name}
                                   </div>
                                       {x.map ? (<div className="map">
                                       {
                                           x.map.push ? _.map(x.map, function(y,i){
                                               return <a target="_blank" href={y} onClick={that.direct}>{"directions" + i}</a>;
                                           }) : (<a target="_blank" href={x.map} onClick={that.direct}>{x.address || 'directions'}</a>)
                                       }
                                   </div>) : null}
                                       <div className="text" dangerouslySetInnerHTML={{__html: x.text }}>
                                   </div>
                                       {x.hours ? (
                                       <div className="hours">
                                       Hours: {x.hours}
                                   </div>) : null
                                       }
                                      {x.link ? (
                                       <div className="link">
                                       <a target="_blank" href={x.link}>website</a>
                                       </div>) : null }
                                   {x.tel ? (
                                       <div className="tel">
                                       <a target="_blank" href={'tel:' + x.tel}>{x.tel}</a>
                                       </div>) : null }
                                   {pos && x.map ? (
                                       <div className="dist">
                                           {'Distance: ' + x.dist + ' km'}
                                       </div>) : null }


                                       <div className="tags">
                                       Tags: {x.tags}
                                   </div>

                                       </div>

        );
    }
});

var Lista = React.createClass({
    aside: function(){
        if (this.state.aside) {
            $('#main').css('margin-left','0');
        }
        else {
            $('#main').css('margin-left','-90%');
        }
        var caside = this.state.aside;
        this.setState({aside:!this.state.aside});
        return caside;
    },
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
    search:function(e) {
        console.log('naving');
        this.props.nav('term')(e);
    },
    render: function() {
    var that = this;
    var lilista = _.union(
        _.map(lista.extra,
              function(x){
                  if (x.name && x.name.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) ||
                      (x.tags ==='*' || x.tags && x.tags.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) ||
                      x.text && x.text.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) {


                      return (
                              <Listing x={x} aside={$.noop} cls="extra" />
                      );
                  }
                  return null;
              }),

        _.map(lista.list.sort(function(a,b){return parseFloat(a.dist) - parseFloat(b.dist)}),
              function(x){
                  if (x.name && x.name.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) ||
                      (x.tags ==='*' || x.tags && x.tags.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) ||
                      x.text && x.text.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) {


                      return (
                              <Listing x={x} aside={that.aside} />
                      );
                  }
                  return null;
              }));

    return (
<div className="lista">
  <div>
    <input type="text" placeholde="search" onChange={this.search} value={this.props.term} className="filterput" placeholder="filter here" />
  </div>
    {lilista}

</div>
    );
}
});

var xupdate = function() {
};

const App = React.createClass({
    name: 'App',
    mixins: [ Lifecycle, History ],
    getInitialState: function() {
        return {term: ''};
    },
    componentWillMount: function() {
        this.setState({term:this.props.location.query.term});
        var that = this;
        xupdate = function() {
            that.forceUpdate();
        };
        // var cquery = this.context.router.getCurrentQuery();
        // var def = {term: ''};
        // this.context.router.transitionTo('/', '', _.extend(def,cquery));
    },
    nav: function(name) {
        var that = this;
        return function(e) {
            var val = e.target.value;
            var q = {};
            q[name] = val;
            console.log('value change',e.target.value, q);
            that._nav(q);
        };
    },
    _nav: function(q) {
        this.history.pushState(null, '/lista', q);
        this.setState(q);
    },
    routerWillLeave: function(nextLocation) {
        return null;
    },
    render: function() {
        return (
            <Lista nav={this.nav} term={this.state.term} />
        );
    }
});



import createBrowserHistory from 'history/lib/createBrowserHistory';
render((
        <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
        </Route>
        <Route path="/lista/" component={App} >
        </Route>
        <Route path="/lista" component={App} >
        </Route>
        </Router>
), document.getElementById('main'));
