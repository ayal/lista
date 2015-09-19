webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* jsx */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var lista = { list: [{ name: 'AM:PM', tags: 'supplies,food,supermarket', text: 'Open all the time, a bit expensive', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0610061,34.7726299/@32.0600967,34.7699804,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en' }, { name: 'Merry Market', tags: 'supplies,food,supermarket', text: 'Grocery store open all the time, cheaper than AM:PM but smaller', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0590647,34.7736014/@32.0595488,34.7729953,18z/data=!4m9!4m8!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0!3e2?hl=en' }, { name: 'Sunset spot', tags: 'sunset,beach', text: 'A nice place to go watch the sunset. Its in the beginning of a street called "Arlozerov", on the south side of the hilton hotel. there is a nice garden there.  The beach at the bottom of the garden is also nice. You can take <a href="/?term=line 4">line 4/5</a> to get there. Ask the driver to get down at Arlozerov street.', tags: 'sunset', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Hilton+Tel+Aviv,+Ha-Yarkon+St+205,+Tel+Aviv-Yafo,+6340506/@32.0741967,34.753034,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c768299324d:0xd54dd0137261b603!2m2!1d34.77089!2d32.089139!3e2?hl=en' }, { name: 'Sunset spot, Jaffa', tags: 'sunset,beach', text: 'A nice place to go watch the sunset.', tags: 'sunset', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0544015,34.7531036/@32.0540514,34.7532538,17z/data=!4m9!4m8!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0!3e2?hl=en' }, { name: 'line 4 or 5 station', 'text': 'take these lines from this station to get to the center/north of tel aviv. There is no real station you just stand in the corner and wait for them to arrive. they look like <a target="_blank" href="http://www.nrg.co.il/images/archive/300x225/1/423/686.jpg">this</a>. they operate even on the weekend and at night (though a bit less frequent than during the weekdays)', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0608938,34.7739215/@32.0600371,34.7706351,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en', tags: 'public transport,bus,taxi,center,north' }, { name: 'TEDER.FM', 'text': 'nice place where a lot hipsters go. both a bar (downstairs) and a restaurant (upstrairs)', tags: 'food,drink,restaurant,bar,music,shows,dj,night', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Romano+Building,+Tel+Aviv-Yafo/@32.0596742,34.7684399,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9c10f80dd7:0x2438e7e0961ebac5!2m2!1d34.7694205!2d32.0605883?hl=en', hours: 'sun-thu:21:00+|weekend:16:00+', link: 'https://www.facebook.com/events/718848381593377/' }, { name: 'Beta and Grega', 'text': 'Very nice coffee place / bar with some food', tags: 'food,drink,bar', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%AA%D7%94+%D7%95%D7%92%D7%A8%D7%99%D7%92%D7%94,+%D7%9C%D7%91%D7%95%D7%A0%D7%98%D7%99%D7%9F+2,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0602854,34.7706351,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d7c404227:0xcc1a581a58d261d8!2m2!1d34.7738534!2d32.0612942?hl=en', hours: '24/7' }, { name: 'Gold Hummus', 'text': 'Hummus restaurant', tags: 'food,hummus', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%92%D7%A8%D7%92%D7%A8+%D7%94%D7%96%D7%94%D7%91,+%D7%9C%D7%95%D7%99%D7%A0%D7%A1%D7%A7%D7%99+30,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0595147,34.7694424,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9dd284ccd5:0xb29ba8ccdbaba7b!2m2!1d34.7714255!2d32.0597072?hl=en', hours: 'weekdays:10:00-20:00' }, { name: 'Abu Hassan Hummus branch 1', 'text': 'Best Hummus restaurant in tel aviv (Jaffa)', tags: 'food,hummus,jaffa', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A2%D7%9C%D7%99+%D7%A7%D7%A8%D7%95%D7%90%D7%9F+%D7%90%D7%91%D7%95+%D7%97%D7%A1%D7%9F,+%D7%94%D7%93%D7%95%D7%9C%D7%A4%D7%99%D7%9F+1,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0550299,34.7521788,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cc80daafe67:0x129d4e2acf06abee!2m2!1d34.7508605!2d32.0501865!3e2?hl=en', hours: 'weekdays:09:00-15:00' }, { name: 'Abu Hassan Hummus branch 2', 'text': 'Best Hummus restaurant in tel aviv (Jaffa)', tags: 'food,hummus,jaffa', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A2%D7%9C%D7%99+%D7%A7%D7%A8%D7%90%D7%95%D7%95%D7%9F+%D7%90%D7%91%D7%95+%D7%97%D7%A1%D7%9F,+%D7%A9%D7%91%D7%98%D7%99+%D7%99%D7%A9%D7%A8%D7%90%D7%9C+14,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0543824,34.7601277,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cb9f8e71dcd:0x60406f6868e117bf!2m2!1d34.7574593!2d32.0494615!3e2?hl=en', hours: 'weekends:09:00-15:00' }, { name: 'Bicycle rent station', text: 'Station where you rent green bicycle. The full map of all the stations is <a target="blank" href="https://www.google.com/maps/d/viewer?mid=zdi_rVF5Mzjw.kbZqZIxGbWuc&hl">here</a>', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Sderot+Washington+15,+Tel+Aviv-Yafo/@32.0576879,34.7684299,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9f43628123:0x171874af5f92cb99!2m2!1d34.7695488!2d32.0561839?hl=en', tags: 'bicycle,telofun', hours: '24/7' }, { name: 'Tourist info center, Jaffa', tags: 'tourist,info', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Tourist+Information+Center,+Tel+Aviv-Yafo/@32.0575303,34.7597386,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cbe97822df7:0x831a29df576eaee5!2m2!1d34.756791!2d32.055205!3e2?hl=en', hours: 'sun-thu 9:30-18:30|fri: 9:30-16:00|sat/holidays: 10:00-16:00' }, { name: 'Kaymak', text: 'Great place for food and drink', hours: 'weekdays:10:00-23:00,fri:10:00-15:00', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A7%D7%90%D7%99%D7%9E%D7%90%D7%A7,+%D7%9C%D7%95%D7%99%D7%A0%D7%A1%D7%A7%D7%99+49,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0594811,34.7699426,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9dc2567a87:0x70fbf779f1e90c66!2m2!1d34.7725742!2d32.0597242?hl=en', tags: 'drink,food,restaurant' }, { name: 'Barmitzvah', text: 'Great place for drinking at night', hours: 'weekday nights and sat night maybe also :)', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%A8%D7%9E%D7%A6%D7%95%D7%95%D7%94,+%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F+13,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0594852,34.7701238,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d948ff5a5:0xbb8996e5e91f6089!2m2!1d34.7729999!2d32.0600943?hl=en', tags: 'drink' }, { name: 'Casino San Remo', text: 'Great place for brunch. They have occasional djs and shows.', link: 'https://www.facebook.com/casinosanremo?fref=ts', hours: 'everyday till lateish', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%A8%D7%9E%D7%A6%D7%95%D7%95%D7%94,+%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F+13,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0594852,34.7701238,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d948ff5a5:0xbb8996e5e91f6089!2m2!1d34.7729999!2d32.0600943?hl=en', tags: 'drink,food,restaurant' }, { name: 'SIM card', text: 'theres this cheap coffee chain thing called "Cofix" that sells sim cards for only 5 shekel (the plan is 30 shekels per month). it shouldnt be much of a hassle to install it in your phone, probably just buy, put it there and do some confirmation through a website.', hours: 'weekdays till night,sat:open at 19:00', map: 'https://www.google.co.il/maps/place/Cofix/@32.0607839,34.768996,17z/data=!4m18!1m15!4m14!1m6!1m2!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2sMerkhavya+St+19,+Tel+Aviv-Yafo!2m2!1d34.7719245!2d32.0591828!1m6!1m2!1s0x151d4c9cf566c159:0xcbf8a03ccb64816c!2sCofix,+Isra%C3%ABl,+Lilienblum+St+21,+Tel+Aviv-Yafo!2m2!1d34.7699556!2d32.0622645!3m1!1s0x151d4c9cf566c159:0xcbf8a03ccb64816c?hl=en', tags: 'sim card,cheap coffee' }, { name: 'Diego San', text: 'really nice korean-mexican vibe with djs and stuff and cool dishes', link: 'https://www.facebook.com/diegosantlv?fref=ts', hours: 'everyday 7:00 pm-5:00 am', map: 'https://www.google.co.il/maps/dir//%D7%93%D7%99%D7%99%D7%92%D7%95+%D7%A1%D7%90%D7%9F,+%D7%94%D7%9E%D7%A9%D7%91%D7%99%D7%A8+2,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0604755,34.7709159,17z/data=!4m12!1m3!3m2!1s0x151d4c9c35faa8df:0x429c191470614a91!2z15PXmdeZ15LXlSDXodeQ158!4m7!1m0!1m5!1m1!1s0x151d4c9c35faa8df:0x429c191470614a91!2m2!1d34.7709159!2d32.0604755?hl=en', tags: 'drink,food,restaurant,dj,vibes' }, { name: 'Flea Market', text: 'Nice area with restaurants and bars and fashion shops and second hand stores and anthiques.', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A4%D7%95%D7%A2%D7%94,+%D7%A8%D7%91%D7%99+%D7%99%D7%95%D7%97%D7%A0%D7%9F+3,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0564579,34.7594825,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cb94729057d:0x2b2a0d7cb7dc2930!2m2!1d34.7562843!2d32.0530602!3e2?hl=en', tags: 'second hand,clothes,market,flea,fashion' }] };

	var Lista = _react2['default'].createClass({
	    displayName: 'Lista',

	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {},
	    componentWillUnmount: function componentWillUnmount() {},
	    search: function search(e) {
	        this.props.nav('term')(e);
	    },
	    render: function render() {
	        var that = this;

	        var lilista = _.map(lista.list, function (x) {
	            if (x.name && x.name.toLowerCase().match(that.props.term) || x.tags && x.tags.toLowerCase().match(that.props.term) || x.text && x.text.toLowerCase().match(that.props.term)) {
	                return _react2['default'].createElement(
	                    'li',
	                    null,
	                    _react2['default'].createElement(
	                        'div',
	                        { 'class': 'name' },
	                        x.name
	                    ),
	                    _react2['default'].createElement('div', { 'class': 'text', dangerouslySetInnerHTML: { __html: x.text } }),
	                    _react2['default'].createElement(
	                        'div',
	                        { 'class': 'tags' },
	                        x.tags
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { 'class': 'hours' },
	                        'Hours: ',
	                        x.hours
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { 'class': 'map' },
	                        _react2['default'].createElement(
	                            'a',
	                            { target: '_blank', href: x.map },
	                            'map'
	                        )
	                    ),
	                    x.link ? _react2['default'].createElement(
	                        'div',
	                        { 'class': 'link' },
	                        _react2['default'].createElement(
	                            'a',
	                            { target: '_blank', href: x.link },
	                            'website'
	                        )
	                    ) : null
	                );
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
	            _react2['default'].createElement(
	                'ul',
	                null,
	                lilista
	            )
	        );
	    }
	});

	var App = _react2['default'].createClass({
	    displayName: 'App',

	    name: 'App',
	    getInitialState: function getInitialState() {
	        return { menustate: '' };
	    },
	    componentWillMount: function componentWillMount() {
	        // var cquery = this.context.router.getCurrentQuery();
	        // var def = {term: ''};
	        // this.context.router.transitionTo('/', '', _.extend(def,cquery));
	    },
	    nav: function nav(name) {
	        var that = this;
	        return function (e) {
	            console.log('value change', e.target.value);
	            var val = event.target.value;
	            var q = {};
	            q[name] = val;
	            that._nav(q);
	        };
	    },
	    _nav: function _nav(q) {
	        this.context.router.transitionTo('/', '', q);
	    },
	    contextTypes: {
	        router: _react2['default'].PropTypes.func.isRequired
	    },

	    render: function render() {
	        query = this.context.router.getCurrentQuery();

	        return _react2['default'].createElement(Lista, { nav: this.nav, term: query.term });
	    }
	});

	_react2['default'].render(_react2['default'].createElement(
	    _reactRouter.Router,
	    { bla: 'sdf' },
	    _react2['default'].createElement(_reactRouter.Route, { path: '/', component: App })
	), document.body);

/***/ }

})