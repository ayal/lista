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
        zoom: 17,
        center: {lat: 32.0591797, lng: 34.771954},
        scrollwheel: true,
	styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]

    };

    window.map = new google.maps.Map(document.getElementById("map"),
                                  mapOptions);
    window.infowindow = new google.maps.InfoWindow();
    window.directionsDisplay = new google.maps.DirectionsRenderer({
	polylineOptions: {
	    strokeColor: "#00ffbf"
	}
    });
    window.directionsDisplay.setMap(map);
    });

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
    var listclone = _.clone(lista.list);
    $.getJSON('json/fsdata.json?v=3', function(r){
	window.fsdata = r;
        r.forEach(function(x){

            var match;
            listclone.forEach(function(y){
		if (y.orig) {
		    if (x.venue.id === y.orig) {
			y.nomore = true;
			match = y;
			console.log('match by id', x.venue.name, y.name);
		    }
		}
                else if (!y.nomore && (x.venue.name.toLowerCase().match(y.name.toLowerCase()) || y.name.toLowerCase().match(x.venue.name.toLowerCase()) )) {
		    y.nomore = true;
                    match = y;
                    console.log('match by name', x.venue.name, y.name);
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
            var map = 'https://www.google.com/maps/dir/Current+Location/' + encodeURIComponent(daddr) +
                    '?dirflg=w';
            match.map = map;
            if (lista.list.indexOf(match) === -1) {
                lista.list.push(match);
            }
	    match.x = x;
        });
        cb();
    });
};



var pos = {latitude: 32.059088, longitude: 34.771221};

var updateDist = function() {
    _.map(lista.list, function(x){
        var xydist = getdist(x);
        if (xydist) {
            x.dist = xydist.dist;
            x.lat = xydist.lat;
            x.lng = xydist.lng;
        }
    });
};

mergelistas(function(){
    if(geo.init()){

        geo.getCurrentPosition(function(p){
	    window.loaded = true;
            pos = p.coords;
            console.log('pos', pos);
	    updateDist();

            xupdate();
        }, function(){
	    window.loaded = true;
	    updateDist();
	    xupdate();
	    console.log('error getting postion', arguments);
	});
    }
    else{
        alert("Functionality not available");
    }
    xupdate();
});

var getdist = function(x) {
    if (x && x.map) {
	var lat1, lng1;
	if (x.x && x.x.venue && x.x.venue.location) {
	    lat1 = x.x.venue.location.lat;
            lng1 = x.x.venue.location.lng;
	}
	else {
            var rgx = (false) ?  /@(.*?)((%2C)|,)(.*?),/gim:  /daddr=(.*?)((%2C)|,)(.*?)&/gim;
            var match = rgx.exec(x.map);
            if (match) {
                lat1 = parseFloat(match[1]);
                lng1 = parseFloat(match[4]);
	    }
	}
	var d = 1;
	if (pos) {
	    d = getDistanceFromLatLonInKm( lat1, lng1, pos.latitude, pos.longitude);
	}
        if (d < 1) {
            !x.tags.match('near') && (x.tags+=',near');
        }
        else if (d < 2) {
            !x.tags.match('walking') && (x.tags+=',walking');
        }

	// hack: fix map link:
	x.map = 'https://www.google.com/maps/dir/Current+Location/' + encodeURIComponent(lat1+','+lng1) + '?dirflg=w';
	console.log('got dist', d, lat1, lng1);
        return {dist: d, lat: lat1, lng: lng1};
    }
}

var goldStar = {
    path: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
    fillColor: '#00ffbf',
    fillOpacity: 0.8,
    scale: 0.01,
    strokeColor: '#00ffbf',
    strokeWeight: 14
  };

var Listing = React.createClass({
    getInitialState: function() {
        return {};
    },
    updateMarker: function(x) {
        var that = this;
        this.marker && this.marker.setMap(null);
        if (x.lat) {
            var myLatLng = new google.maps.LatLng(x.lat, x.lng);
	    this.marker = new google.maps.Marker({
		icon: goldStar,
		position: myLatLng,
		map: window.map,
		title: x.name
            });
            this.marker.addListener('click', function() {
		infowindow.setContent('<div><br><h3>' + x.name + '</h3><div style="width:150px">'+x.text+'</div></div>');
		infowindow.open(map, that.marker);
            });
	}

    },
    componentDidUpdate: function() {
	this.updateMarker(this.props.x);
    },
    componentDidMount: function() {
	this.updateMarker(this.props.x);
    },
    setCenter: function(){
	console.log(this.props.x);
        if (this.props.aside()) {
            return;
        }

        var x = this.props.x;
        if (x.lat) {
	    this.updateMarker(x);
            var myLatLng = new google.maps.LatLng(x.lat, x.lng);
            window.map.setCenter(myLatLng);

            var that = this;

            var directionsService = new google.maps.DirectionsService();
            var request = {
                origin: new google.maps.LatLng(pos.latitude, pos.longitude),
                destination:myLatLng,
                travelMode: google.maps.TravelMode.WALKING
            };
            directionsService.route(request, function(result, status) {

                if (status == google.maps.DirectionsStatus.OK) {
		    setTimeout(function(){
			infowindow.setContent('<div><br><h3>' + x.name + '</h3><div style="width:150px">'+x.text+'</div></div>');
			infowindow.open(map, that.marker);
		    },1000)
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
			  <div>
			  <button onClick={this.setCenter} href="#" style={{cursor:"pointer"}} className="btn btn-3 btn-3e fa fa-map listbtn">map</button>
			  </div>

			  <span>{x.address}</span>
                                       {
                                           x.map.push ? _.map(x.map, function(y,i){
                                               return <a target="_blank" href={y} onClick={that.direct}>{"google map" + i}</a>;
                                           }) : (<a target="_blank" href={x.map} onClick={that.direct}>{'google map'}</a>)
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
                                           {'Distance: ' + (Math.round(x.dist * 10) / 10).toFixed(1) + ' km'}
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
	    $('.lista').css('transform', 'translateX(0)');
        }
        else {
	    $('.lista').css('transform', 'translateX(-80%)');
        }
        var caside = this.state.aside;
        this.setState({aside:!this.state.aside});
        return caside;
    },
  getInitialState: function() {
      return {aside:false};
  },
  componentDidMount: function() {

  },
    componentWillUnmount: function() {

    },
    toggle: function(e){
	this.aside();
	e.preventDefault();
    },
    mapornot: function() {
	if (this.state.aside) {
	    return 'list';
	}
	else {
	    return 'map';
	}
    },
    search:function(e) {
        console.log('naving');
        this.props.nav('term')(e);
    },
    render: function() {
	if (!window.loaded) {
		return (
	    <div className="demo-3">
	    <ul className="bokeh">
		<li></li>
		<li></li>
		<li></li>
		</ul>
		</div>
		);
	}


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
		<div>
		<div className="nav">
		<input type="text" placeholde="search" onChange={this.search} value={this.props.term} className="filterput" placeholder="filter here" />
		<button onClick={this.toggle} href="#" style={{cursor:"pointer"}} className="btn btn-3 btn-3e fa fa-map togglebtn kkk">{this.mapornot()}</button>
		</div>

<div className="lista">
	    <div>
	    </div>
	    <div className="realista">
    {lilista}
</div>
		</div>
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
	var that = this;
        this.setState({term:this.props.location.query.term});
        var that = this;
        xupdate = function() {
            that.forceUpdate();
        };

	$(function(){
	    $(document).on("click", ".filter", function(evt) {
		console.log('click filter');
		evt.preventDefault();
		that.nav('term')(evt);
	    });

	})

    },
    nav: function(name) {
        var that = this;
        return function(e) {
            var val = e.target.value || $(e.target).attr('term');
            var q = {};
            q[name] = val;
            console.log('value change',e.target.value, q);
            that._nav(q);
        };
    },
    _nav: function(q) {
        this.history.pushState(null, '/lista/', q);
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
        </Router>
), document.getElementById('main'));
