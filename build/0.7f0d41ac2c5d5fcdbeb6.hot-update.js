webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(159);

	var _reactRouter = __webpack_require__(160);

	var _lista = __webpack_require__(208);

	var _geo = __webpack_require__(209);

	var _createBrowserHistory = __webpack_require__(210);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.lista = _lista.lista; /* jsx */

	$(function () {

	    var mapdiv = document.getElementById("map");
	    mapdiv.style.width = '100%';
	    mapdiv.style.height = '100%';
	    var mapOptions = {
	        zoom: 17,
	        center: { lat: 32.0591797, lng: 34.771954 },
	        scrollwheel: true,
	        styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 13 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#08304b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "color": "#146474" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#021019" }] }]

	    };

	    window.map = new google.maps.Map(document.getElementById("map"), mapOptions);
	    window.infowindow = new google.maps.InfoWindow();
	    window.directionsDisplay = new google.maps.DirectionsRenderer({
	        polylineOptions: {
	            strokeColor: "#00ffbf"
	        }
	    });
	    window.directionsDisplay.setMap(map);
	});

	function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	    var R = 6371; // Radius of the earth in km
	    var dLat = deg2rad(lat2 - lat1); // deg2rad below
	    var dLon = deg2rad(lon2 - lon1);
	    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	    var d = R * c; // Distance in km
	    return d;
	}

	function deg2rad(deg) {
	    return deg * (Math.PI / 180);
	}

	var fsGetHours = function fsGetHours(x) {
	    return x.venue.hours.timeframes.map(function (tf) {
	        return tf.days + ':' + tf.open.map(function (o) {
	            return o.renderedTime;
	        }).join(',');
	    }).join('|');
	};

	var mergelistas = function mergelistas(cb) {
	    var listclone = _.clone(_lista.lista.list);
	    $.getJSON('fsdata.json?v=3', function (r) {
	        window.fsdata = r;
	        r.forEach(function (x) {

	            var match;
	            listclone.forEach(function (y) {
	                if (y.orig) {
	                    if (x.venue.id === y.orig) {
	                        y.nomore = true;
	                        match = y;
	                        console.log('match by id', x.venue.name, y.name, x, y);
	                    }
	                } else if (!y.nomore && (x.venue.name.toLowerCase().match(y.name.toLowerCase()) || y.name.toLowerCase().match(x.venue.name.toLowerCase()))) {
	                    y.nomore = true;
	                    match = y;
	                    console.log('match by name', x.venue.name, y.name, x, y);
	                }
	            });

	            match ? match.tags = match.tags + ',' + x.venue.tags.join(',') + ',' + x.venue.categories.map(function (x) {
	                return x.name;
	            }).join(',') : null;
	            match = _.extend(match || {}, _.extend({ name: x.venue.name,
	                link: x.venue.canonicalUrl,
	                tags: x.venue.tags.join(',') + ',' + x.venue.categories.map(function (x) {
	                    return x.name;
	                }).join(','), text: x.venue.categories.map(function (x) {
	                    return x.name;
	                }).join(',') }, match));
	            if (x.venue.hours && !match.hours) {
	                match.hours = fsGetHours(x);
	            }
	            match.tel = x.venue.contact.phone;
	            match.address = x.venue.location.address;
	            var daddr = x.venue.location.lat + ',' + x.venue.location.lng;
	            var map = 'https://www.google.com/maps/dir/Current+Location/' + encodeURIComponent(daddr) + '?dirflg=w';
	            match.map = map;
	            if (_lista.lista.list.indexOf(match) === -1) {
	                _lista.lista.list.push(match);
	            }
	            match.x = x;
	        });
	        cb();
	    });
	};

	var pos;
	mergelistas(function () {
	    if (_geo.geo.init()) {
	        _geo.geo.getCurrentPosition(function (p) {
	            pos = p.coords;
	            console.log('pos', pos);
	            _.map(_lista.lista.list, function (x) {
	                var xydist = getdist(x);
	                if (xydist) {
	                    x.dist = xydist.dist;
	                    x.lat = xydist.lat;
	                    x.lng = xydist.lng;
	                }
	            });
	            xupdate();
	        }, function () {
	            console.log('error getting postion', arguments);
	        });
	    } else {
	        alert("Functionality not available");
	    }
	    //    xupdate();
	});

	var getdist = function getdist(x) {
	    if (x && x.map && pos) {
	        var lat1, lng1;
	        if (x.x && x.x.venue && x.x.venue.location) {
	            lat1 = x.x.venue.location.lat;
	            lng1 = x.x.venue.location.lng;
	        } else {
	            var rgx = false ? /@(.*?)((%2C)|,)(.*?),/gim : /daddr=(.*?)((%2C)|,)(.*?)&/gim;
	            var match = rgx.exec(x.map);
	            if (match) {
	                lat1 = parseFloat(match[1]);
	                lng1 = parseFloat(match[4]);
	            }
	        }
	        var d = getDistanceFromLatLonInKm(lat1, lng1, pos.latitude, pos.longitude);
	        if (d < 1) {
	            !x.tags.match('near') && (x.tags += ',near');
	        } else if (d < 2) {
	            !x.tags.match('walking') && (x.tags += ',walking');
	        }

	        // hack: fix map link:
	        x.map = 'https://www.google.com/maps/dir/Current+Location/' + encodeURIComponent(lat1 + ',' + lng1) + '?dirflg=w';
	        return { dist: (Math.round(d * 10) / 10).toFixed(1), lat: lat1, lng: lng1 };
	    }
	};

	var Listing = _react2.default.createClass({
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        var x = this.props.x;
	        var that = this;
	        this.marker && this.marker.setMap(null);
	        if (x.lat) {
	            var myLatLng = new google.maps.LatLng(x.lat, x.lng);

	            this.marker = new google.maps.Marker({
	                position: myLatLng,
	                map: window.map,
	                title: x.name
	            });
	            this.marker.addListener('click', function () {
	                infowindow.setContent('<div><br><h3>' + x.name + '</h3><div style="width:200px">' + x.text + '</div></div>');
	                infowindow.open(map, that.marker);
	            });
	        }
	    },
	    setCenter: function setCenter() {
	        console.log(this.props.x);
	        if (this.props.aside()) {
	            return;
	        }

	        var x = this.props.x;
	        if (x.lat) {
	            var myLatLng = new google.maps.LatLng(x.lat, x.lng);
	            window.map.setCenter(myLatLng);

	            var that = this;

	            var directionsService = new google.maps.DirectionsService();
	            var request = {
	                origin: new google.maps.LatLng(pos.latitude, pos.longitude),
	                destination: myLatLng,
	                travelMode: google.maps.TravelMode.WALKING
	            };
	            directionsService.route(request, function (result, status) {

	                if (status == google.maps.DirectionsStatus.OK) {
	                    setTimeout(function () {
	                        infowindow.setContent('<div><br><h3>' + x.name + '</h3><div style="width:200px">' + x.text + '</div></div>');
	                        infowindow.open(map, that.marker);
	                    }, 1000);
	                    directionsDisplay.setDirections(result);
	                }
	            });
	        }
	    },
	    direct: function direct(e) {
	        e.stopPropagation();
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.marker && this.marker.setMap(null);
	    },
	    render: function render() {
	        var that = this;
	        var x = this.props.x;
	        return _react2.default.createElement(
	            'div',
	            { className: "listing " + this.props.cls, onClick: this.setCenter, style: { cursor: "pointer" } },
	            _react2.default.createElement(
	                'div',
	                { className: 'name' },
	                x.name
	            ),
	            x.map ? _react2.default.createElement(
	                'div',
	                { className: 'map' },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'button',
	                        { onClick: this.setCenter, href: '#', style: { cursor: "pointer" }, className: 'btn btn-3 btn-3e fa fa-map listbtn' },
	                        'map'
	                    )
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    x.address
	                ),
	                x.map.push ? _.map(x.map, function (y, i) {
	                    return _react2.default.createElement(
	                        'a',
	                        { target: '_blank', href: y, onClick: that.direct },
	                        "google map" + i
	                    );
	                }) : _react2.default.createElement(
	                    'a',
	                    { target: '_blank', href: x.map, onClick: that.direct },
	                    'google map'
	                )
	            ) : null,
	            _react2.default.createElement('div', { className: 'text', dangerouslySetInnerHTML: { __html: x.text } }),
	            x.hours ? _react2.default.createElement(
	                'div',
	                { className: 'hours' },
	                'Hours: ',
	                x.hours
	            ) : null,
	            x.link ? _react2.default.createElement(
	                'div',
	                { className: 'link' },
	                _react2.default.createElement(
	                    'a',
	                    { target: '_blank', href: x.link },
	                    'website'
	                )
	            ) : null,
	            x.tel ? _react2.default.createElement(
	                'div',
	                { className: 'tel' },
	                _react2.default.createElement(
	                    'a',
	                    { target: '_blank', href: 'tel:' + x.tel },
	                    x.tel
	                )
	            ) : null,
	            pos && x.map ? _react2.default.createElement(
	                'div',
	                { className: 'dist' },
	                'Distance: ' + x.dist + ' km'
	            ) : null,
	            _react2.default.createElement(
	                'div',
	                { className: 'tags' },
	                'Tags: ',
	                x.tags
	            )
	        );
	    }
	});

	var Lista = _react2.default.createClass({
	    aside: function aside() {
	        if (this.state.aside) {
	            $('.lista').css('transform', 'translateX(0)');
	        } else {
	            $('.lista').css('transform', 'translateX(-80%)');
	        }
	        var caside = this.state.aside;
	        this.setState({ aside: !this.state.aside });
	        return caside;
	    },
	    getInitialState: function getInitialState() {
	        return { aside: false };
	    },
	    componentDidMount: function componentDidMount() {},
	    componentWillUnmount: function componentWillUnmount() {},
	    toggle: function toggle(e) {
	        this.aside();
	        e.preventDefault();
	    },
	    mapornot: function mapornot() {
	        if (this.state.aside) {
	            return 'list';
	        } else {
	            return 'map';
	        }
	    },
	    search: function search(e) {
	        console.log('naving');
	        this.props.nav('term')(e);
	    },
	    render: function render() {
	        var that = this;
	        var lilista = _.union(_.map(_lista.lista.extra, function (x) {
	            if (x.name && x.name.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || x.tags === '*' || x.tags && x.tags.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || x.text && x.text.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) {

	                return _react2.default.createElement(Listing, { x: x, aside: $.noop, cls: 'extra' });
	            }
	            return null;
	        }), _.map(_lista.lista.list.sort(function (a, b) {
	            return parseFloat(a.dist) - parseFloat(b.dist);
	        }), function (x) {
	            if (x.name && x.name.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || x.tags === '*' || x.tags && x.tags.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || x.text && x.text.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) {

	                return _react2.default.createElement(Listing, { x: x, aside: that.aside });
	            }
	            return null;
	        }));

	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'div',
	                { className: 'nav' },
	                _react2.default.createElement('input', { type: 'text', placeholde: 'search', onChange: this.search, value: this.props.term, className: 'filterput', placeholder: 'filter here' }),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.toggle, href: '#', style: { cursor: "pointer" }, className: 'btn btn-3 btn-3e fa fa-map togglebtn kkk' },
	                    this.mapornot()
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'lista' },
	                _react2.default.createElement('div', null),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'realista' },
	                    lilista
	                )
	            )
	        );
	    }
	});

	var xupdate = function xupdate() {};

	var App = _react2.default.createClass({
	    name: 'App',
	    mixins: [_reactRouter.Lifecycle, _reactRouter.History],
	    getInitialState: function getInitialState() {
	        return { term: '' };
	    },
	    componentWillMount: function componentWillMount() {
	        this.setState({ term: this.props.location.query.term });
	        var that = this;
	        xupdate = function () {
	            that.forceUpdate();
	        };
	        // var cquery = this.context.router.getCurrentQuery();
	        // var def = {term: ''};
	        // this.context.router.transitionTo('/', '', _.extend(def,cquery));
	    },
	    nav: function nav(name) {
	        var that = this;
	        return function (e) {
	            var val = e.target.value;
	            var q = {};
	            q[name] = val;
	            console.log('value change', e.target.value, q);
	            that._nav(q);
	        };
	    },
	    _nav: function _nav(q) {
	        this.history.pushState(null, '/lista/', q);
	        this.setState(q);
	    },
	    routerWillLeave: function routerWillLeave(nextLocation) {
	        return null;
	    },
	    render: function render() {
	        return _react2.default.createElement(Lista, { nav: this.nav, term: this.state.term });
	    }
	});

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: (0, _createBrowserHistory2.default)() },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: App }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/lista/', component: App })
	), document.getElementById('main'));

/***/ }
])