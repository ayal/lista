webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* jsx */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _listaJs = __webpack_require__(216);

	var _historyLibCreateBrowserHistory = __webpack_require__(202);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	window.lista = _listaJs.lista;

	$(function () {

	    var mapdiv = document.getElementById("map");
	    mapdiv.style.width = '100%';
	    mapdiv.style.height = '100%';
	    var mapOptions = {
	        zoom: 18,
	        center: { lat: 32.0591797, lng: 34.771954 },
	        scrollwheel: true
	    };

	    window.map = new google.maps.Map(document.getElementById("map"), mapOptions);
	    window.infowindow = new google.maps.InfoWindow();
	    window.directionsDisplay = new google.maps.DirectionsRenderer();
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
	    $.getJSON('fsdata.json', function (r) {

	        r.forEach(function (x) {
	            var match;
	            _listaJs.lista.list.forEach(function (y) {
	                if (x.venue.name.toLowerCase().match(y.name.toLowerCase()) || y.name.toLowerCase().match(x.venue.name.toLowerCase()) || x.venue.id === y.orig) {
	                    match = y;
	                    console.log('match!', x.venue.name, y.name);
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
	            var daddr = x.venue.location.lat + ',' + x.venue.location.lng;
	            var map = 'https://www.google.com/maps?&daddr=' + encodeURIComponent(daddr) + '&dirflg=w';
	            match.map = map;
	            if (_listaJs.lista.list.indexOf(match) === -1) {
	                _listaJs.lista.list.push(match);
	            }
	        });
	        cb();
	    });
	};

	var pos;
	mergelistas(function () {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function (p) {
	            pos = p.coords;
	            console.log('pos', pos);
	            _.map(_listaJs.lista.list, function (x) {
	                var xydist = getdist(x);
	                if (xydist) {
	                    x.dist = xydist.dist;
	                    x.lat = xydist.lat;
	                    x.lng = xydist.lng;
	                }
	            });
	            xupdate();
	        });
	    }
	    xupdate();
	});

	var getdist = function getdist(x) {
	    if (x && x.map && pos) {
	        var rgx = /daddr=(.*?)((%2C)|,)(.*?)&/gim;
	        var match = rgx.exec(x.map);
	        if (match) {
	            var lat1 = parseFloat(match[1]);
	            var lng1 = parseFloat(match[4]);
	            var d = getDistanceFromLatLonInKm(lat1, lng1, pos.latitude, pos.longitude);
	            if (d < 1) {
	                !x.tags.match('near') && (x.tags += ',near');
	            } else if (d < 2) {
	                !x.tags.match('walking') && (x.tags += ',walking');
	            }

	            return { dist: (Math.round(d * 10) / 10).toFixed(1), lat: lat1, lng: lng1 };
	        }
	    }
	};

	var Listing = _react2['default'].createClass({
	    displayName: 'Listing',

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
	                infowindow.setContent(x.name);
	                infowindow.open(map, that.marker);
	            });
	        }
	    },
	    setCenter: function setCenter() {
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
	                destination: myLatLng,
	                travelMode: google.maps.TravelMode.WALKING
	            };
	            directionsService.route(request, function (result, status) {
	                if (status == google.maps.DirectionsStatus.OK) {
	                    directionsDisplay.setDirections(result);
	                }
	            });
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.marker && this.marker.setMap(null);
	    },
	    render: function render() {
	        var x = this.props.x;
	        return _react2['default'].createElement(
	            'div',
	            { className: 'listing', onClick: this.setCenter },
	            _react2['default'].createElement(
	                'div',
	                { className: 'name' },
	                x.name
	            ),
	            x.map ? _react2['default'].createElement(
	                'div',
	                { className: 'map' },
	                x.map.push ? _.map(x.map, function (y, i) {
	                    return _react2['default'].createElement(
	                        'a',
	                        { target: '_blank', href: y },
	                        "directions" + i
	                    );
	                }) : _react2['default'].createElement(
	                    'a',
	                    { target: '_blank', href: x.map },
	                    'map'
	                )
	            ) : null,
	            _react2['default'].createElement('div', { className: 'text', dangerouslySetInnerHTML: { __html: x.text } }),
	            x.hours ? _react2['default'].createElement(
	                'div',
	                { className: 'hours' },
	                'Hours: ',
	                x.hours
	            ) : null,
	            x.link ? _react2['default'].createElement(
	                'div',
	                { className: 'link' },
	                _react2['default'].createElement(
	                    'a',
	                    { target: '_blank', href: x.link },
	                    'website'
	                )
	            ) : null,
	            x.tel ? _react2['default'].createElement(
	                'div',
	                { className: 'tel' },
	                _react2['default'].createElement(
	                    'a',
	                    { target: '_blank', href: 'tel:' + x.tel },
	                    x.tel
	                )
	            ) : null,
	            pos && x.map ? _react2['default'].createElement(
	                'div',
	                { className: 'dist' },
	                'Distance: ' + x.dist + ' km'
	            ) : null,
	            _react2['default'].createElement(
	                'div',
	                { className: 'tags' },
	                'Tags: ',
	                x.tags
	            )
	        );
	    }
	});

	var Lista = _react2['default'].createClass({
	    displayName: 'Lista',

	    aside: function aside() {
	        if (this.state.aside) {
	            $('#main').css('margin-left', '0');
	        } else {
	            $('#main').css('margin-left', '-90%');
	        }
	        var caside = this.state.aside;
	        this.setState({ aside: !this.state.aside });
	        return caside;
	    },
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    componentWillUnmount: function componentWillUnmount() {},
	    search: function search(e) {
	        console.log('naving');
	        this.props.nav('term')(e);
	    },
	    render: function render() {
	        var that = this;
	        var lilista = _.map(_listaJs.lista.list.sort(function (a, b) {
	            return parseFloat(a.dist) - parseFloat(b.dist);
	        }), function (x) {
	            if (x.name && x.name.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || (x.tags === '*' || x.tags && x.tags.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) || x.text && x.text.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) {

	                return _react2['default'].createElement(Listing, { x: x, aside: that.aside });
	            }
	            return null;
	        });

	        return _react2['default'].createElement(
	            'div',
	            { className: 'lista' },
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement('input', { type: 'text', placeholde: 'search', onChange: this.search, value: this.props.term })
	            ),
	            lilista
	        );
	    }
	});

	var xupdate = function xupdate() {};

	var App = _react2['default'].createClass({
	    displayName: 'App',

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
	            var val = event.target.value;
	            var q = {};
	            q[name] = val;
	            console.log('value change', e.target.value, q);
	            that._nav(q);
	        };
	    },
	    routerWillLeave: function routerWillLeave(nextLocation) {
	        return null;
	    },
	    _nav: function _nav(q) {
	        this.history.pushState(null, '/lista', q);
	        this.setState(q);
	    },
	    contextTypes: {
	        router: _react2['default'].PropTypes.func.isRequired
	    },
	    render: function render() {
	        return _react2['default'].createElement(Lista, { nav: this.nav, term: this.state.term });
	    }
	});

	_react2['default'].render(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: (0, _historyLibCreateBrowserHistory2['default'])() },
	    _react2['default'].createElement(_reactRouter.Route, { path: '/', component: App }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/lista/', component: App }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/lista', component: App })
	), document.getElementById('main'));

/***/ }

})