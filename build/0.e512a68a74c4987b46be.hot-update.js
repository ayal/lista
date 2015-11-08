webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* jsx */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(160);

	var _historyLibCreateBrowserHistory = __webpack_require__(202);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	var filter = function filter(x, y) {
	    return '<a class="filter" href="?term=' + (y !== undefined ? y : x) + '">' + x + '</a>';
	};

	window.lista = { list: [{ name: 'filters', text: 'Try these filters: ' + filter('near') + filter('walking') + filter('jaffa') + filter('food') + filter('drink') + filter('street food') + filter('club') + filter('24/7') + filter('transportation') + filter('all', ''), tags: '*' }, { name: 'Activities', text: 'Some websites to help find events / activities / parties etc... <br> <a href="http://israel.dailysecret.com/telaviv/en" target="_blank">one</a><br><a target="_blank" href="https://www.secrettelaviv.com/">two</a><br><a target="_blank" href="http://activities.co.il/categories/%D7%9E%D7%A1%D7%99%D7%91%D7%94?lng=34.76501&lat=32.03954&tt=2015092915&h=%7B%22Sub%22%3A%7B%22%D7%9E%D7%A1%D7%99%D7%91%D7%94%22%3A%7B%7D%7D%7D&r=5&w=today&lang=en">three</a>', tags: '*' }, { name: 'AM:PM supermarket', tags: 'supplies,food,supermarket', text: 'Open all the time, a bit expensive', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0610061,34.7726299/@32.0600967,34.7699804,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en' }, { name: 'Merry Market', tags: 'supplies,food,supermarket,24/7', text: 'Grocery store open all the time, cheaper than AM:PM but smaller', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0590647,34.7736014/@32.0595488,34.7729953,18z/data=!4m9!4m8!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0!3e2?hl=en' }, { name: 'Sunset spot', tags: 'sunset,beach', text: 'A nice place to go watch the sunset. Its in the beginning of a street called "Arlozerov", on the south side of the hilton hotel. there is a nice garden there.  The beach at the bottom of the garden is also nice. You can take <a href="/?term=line 4">line 4 or line 5</a> to get there. Ask the driver to get down at Arlozerov street.', tags: 'sunset', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Hilton+Tel+Aviv,+Ha-Yarkon+St+205,+Tel+Aviv-Yafo,+6340506/@32.0741967,34.753034,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c768299324d:0xd54dd0137261b603!2m2!1d34.77089!2d32.089139!3e2?hl=en' }, { name: 'Sunset spot, Jaffa', tags: 'sunset,beach', text: 'A nice place to go watch the sunset.', tags: 'sunset', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0544015,34.7531036/@32.0540514,34.7532538,17z/data=!4m9!4m8!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0!3e2?hl=en' }, { name: 'line 4 or 5 station', 'text': 'take these lines from this station to get to the center/north of tel aviv. There is no real station you just stand in the corner and wait for them to arrive. they look like <a target="_blank" href="http://www.nrg.co.il/images/archive/300x225/1/423/686.jpg">this</a>. they operate even on the weekend and at night (though a bit less frequent than during the weekdays). Costs around $2. ', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0608938,34.7739215/@32.0600371,34.7706351,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en', tags: 'public transportation,bus,taxi,center,north' }, { name: 'Beta and Grega', 'text': 'Very nice coffee place / bar with some food, especially during the day and snacks at night. open almost 24/7.', tags: 'food,drink,coffee,bar', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%AA%D7%94+%D7%95%D7%92%D7%A8%D7%99%D7%92%D7%94,+%D7%9C%D7%91%D7%95%D7%A0%D7%98%D7%99%D7%9F+2,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0602854,34.7706351,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d7c404227:0xcc1a581a58d261d8!2m2!1d34.7738534!2d32.0612942?hl=en', hours: '24/7' }, { name: 'Abu Hassan Hummus branch 1', 'text': 'Best Hummus restaurant in tel aviv (Jaffa)', tags: 'food,hummus,jaffa,street food', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A2%D7%9C%D7%99+%D7%A7%D7%A8%D7%95%D7%90%D7%9F+%D7%90%D7%91%D7%95+%D7%97%D7%A1%D7%9F,+%D7%94%D7%93%D7%95%D7%9C%D7%A4%D7%99%D7%9F+1,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0550299,34.7521788,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cc80daafe67:0x129d4e2acf06abee!2m2!1d34.7508605!2d32.0501865!3e2?hl=en', hours: 'weekdays:09:00-15:00' }, { name: 'Abu Hassan Hummus branch 2', 'text': 'Best Hummus restaurant in tel aviv (Jaffa)', tags: 'food,hummus,jaffa,street food', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A2%D7%9C%D7%99+%D7%A7%D7%A8%D7%90%D7%95%D7%95%D7%9F+%D7%90%D7%91%D7%95+%D7%97%D7%A1%D7%9F,+%D7%A9%D7%91%D7%98%D7%99+%D7%99%D7%A9%D7%A8%D7%90%D7%9C+14,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0543824,34.7601277,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cb9f8e71dcd:0x60406f6868e117bf!2m2!1d34.7574593!2d32.0494615!3e2?hl=en', hours: 'weekends:09:00-15:00' }, { name: 'Bicycle rent station', text: 'Station where you rent green bicycle. The full map of all the stations is <a target="blank" href="https://www.google.com/maps/d/viewer?mid=zdi_rVF5Mzjw.kbZqZIxGbWuc&hl">here</a>', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Sderot+Washington+15,+Tel+Aviv-Yafo/@32.0576879,34.7684299,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9f43628123:0x171874af5f92cb99!2m2!1d34.7695488!2d32.0561839?hl=en', tags: 'bicycle,telofun', hours: '24/7' }, { name: 'Tourist info center, Jaffa', tags: 'tourist,info', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Tourist+Information+Center,+Tel+Aviv-Yafo/@32.0575303,34.7597386,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cbe97822df7:0x831a29df576eaee5!2m2!1d34.756791!2d32.055205!3e2?hl=en', hours: 'mon-thu or sun 9:30-18:30|fri: 9:30-16:00|sat/holidays: 10:00-16:00' }, { name: 'Barmitzvah', text: 'Great place for drinking at night', hours: 'weekday nights and sat night maybe also :)', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%A8%D7%9E%D7%A6%D7%95%D7%95%D7%94,+%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F+13,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0594852,34.7701238,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d948ff5a5:0xbb8996e5e91f6089!2m2!1d34.7729999!2d32.0600943?hl=en', tags: 'drink' }, { name: 'Flea Market', text: 'Nice area with restaurants and bars and fashion shops and second hand stores and anthiques.', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A4%D7%95%D7%A2%D7%94,+%D7%A8%D7%91%D7%99+%D7%99%D7%95%D7%97%D7%A0%D7%9F+3,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0564579,34.7594825,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cb94729057d:0x2b2a0d7cb7dc2930!2m2!1d34.7562843!2d32.0530602!3e2?hl=en', tags: 'second hand,clothes,market,flea,fashion' }, { name: 'Studio Naim', text: 'Very famous yoga studio. The map is for one specific but there are three branches. See maps and website. <a target="_blank" href="http://www.naim.org.il/en/memberships/">prices</a>', hours: 'see website', map: ['https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95+%D7%A0%D7%A2%D7%99%D7%9D+-+%D7%99%D7%95%D7%92%D7%94,+%D7%A4%D7%99%D7%9C%D7%90%D7%98%D7%99%D7%A1,+%D7%9E%D7%97%D7%95%D7%9C,+%D7%93%D7%A8%D7%9A+%D7%A9%D7%9C%D7%9E%D7%94+46,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95,+66073%E2%80%AD/@32.0570674,34.7674,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4ca20e6cdb4d:0x981fc3cef6a7ff88!2m2!1d34.767489!2d32.054943!3e2?hl=en', 'https://www.google.com/maps/dir/%D7%9E%D7%A8%D7%97%D7%91%D7%99%D7%94+19,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95,+%D7%99%D7%A9%D7%A8%D7%90%D7%9C%E2%80%AD%E2%80%AD/32.0552788,34.7695408/@32.0572308,34.768548,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en', 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/32.0630026,34.7694669/@32.0612194,34.7687516,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en'], link: 'http://www.naim.org.il/en/', tags: 'yoga' }, { name: 'Yoga Levontin', text: 'Nice yoga studio. <a href="http://yogalev.com/pricelist">prices</a>', hours: 'see website', map: 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/Lavontin+St+7,+Tel+Aviv-Yafo,+Israel/@32.0605,34.7727496,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4b629673152b:0xb0ea26dabbf6d240!2m2!1d34.7749325!2d32.0617115!3e2?hl=en', link: 'http://yogalev.com/', tags: 'yoga' }, { name: 'Santa Katarina', text: 'Very hipster place to eat. A bit packed', hours: 'Mon-Thu: 5:30 pm-1:30 am | Fri: 12:30 pm-1:30 am |  Sat: 7:00 pm-1:30 am | Sun:5:30 pm-1:30 am', map: 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/Santa+Katarina,+Har+Sinai+Street+2,+Tel+Aviv-Yafo,+Israel/@32.0619899,34.7693488,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c82d19724e7:0x231035f58280cc0!2m2!1d34.7718868!2d32.0644351!3e2?hl=en', link: 'https://www.facebook.com/santakatarina2/info?tab=page_info', tags: 'hipster,food,music,drink' }, { realhours: { mon_1_open: '08:15',
	            mon_1_close: '00:00',
	            tue_1_open: '08:15',
	            tue_1_close: '00:00',
	            wed_1_open: '08:15',
	            wed_1_close: '00:00',
	            thu_1_open: '08:15',
	            thu_1_close: '00:00',
	            fri_1_open: '08:00',
	            fri_1_close: '16:00',
	            sat_1_open: '09:00',
	            sat_1_close: '00:00',
	            sun_1_open: '08:15',
	            sun_1_close: '00:00' },
	        hours: 'mon-thu or sun:08:15-00:00 | fri:08:00-16:00 | sat:09:00-00:00',
	        map: 'https://www.google.com/maps?saddr=Merhavia%2019%20Tel%20Aviv&daddr=' + encodeURIComponent('32.0599098,34.7716103'),
	        link: 'http://facebook.com/Tonyveesther',
	        text: 'Nice coffee place with food and drinks',
	        tags: 'Coffee, beer, food',
	        name: 'Tony and Esther' }, { realhours: { mon_1_open: '11:00',
	            mon_1_close: '23:00',
	            tue_1_open: '11:00',
	            tue_1_close: '23:00',
	            wed_1_open: '11:00',
	            wed_1_close: '23:00',
	            thu_1_open: '11:00',
	            thu_1_close: '23:00',
	            fri_1_open: '10:00',
	            fri_1_close: '18:00',
	            sun_1_open: '11:00',
	            sun_1_close: '23:00' },
	        hours: 'mon-thu or sun:11:00-23:00 | fri:10:00-18:00',
	        map: 'https://www.google.com/maps?saddr=Merhavia%2019%20Tel%20Aviv&daddr=32.0600815,34.77248&dirflg=w',
	        link: 'http://facebook.com/622591387867546',
	        text: 'Yemenite food with a modern twist. They have 50% on all dishes 17:00-20:00',
	        tags: 'yemenite,food,lunch',
	        name: 'saluf & sons' }, {
	        hours: '',
	        map: 'https://www.google.com/maps?saddr=Merhavia%2019%20Tel%20Aviv&daddr=32.0609016,34.7699814&dirflg=w',
	        link: 'http://facebook.com/uganda.tlv',
	        text: 'Hidden bar and record store',
	        tags: 'Bar,Records,hipster',
	        name: 'Uganda' }, { realhours: { mon_1_open: '21:30',
	            mon_1_close: '03:00',
	            tue_1_open: '21:30',
	            tue_1_close: '03:00',
	            wed_1_open: '21:30',
	            wed_1_close: '03:00',
	            thu_1_open: '21:30',
	            thu_1_close: '04:00',
	            fri_1_open: '22:00',
	            fri_1_close: '04:00',
	            sat_1_open: '21:30',
	            sat_1_close: '03:00' },
	        hours: 'mon-wed or sat:21:30-03:00 | thu:21:30-04:00 | fri:22:00-04:00',
	        map: 'https://www.google.com/maps?saddr=Merhavia%2019%20Tel%20Aviv&daddr=32.0645294,34.7720413&dirflg=w',
	        link: 'http://facebook.com/harsinai',
	        text: 'Place closes at end of october but is really a central place to hipster nightlife',
	        tags: 'drink,dance,hipster',
	        name: 'Har Sinai' }, {
	        hours: 'check website',
	        map: 'https://www.google.com/maps?saddr=Merhavia%2019%20Tel%20Aviv&daddr=32.053847147487,34.784753208717&dirflg=w',
	        link: 'http://www.rail.co.il/EN/DrivePlan/Pages/DrivePlan.aspx',
	        text: 'Train station. A train costs ~$7',
	        tags: 'train,station,transportation',
	        name: 'Ha\'hagana Train Station' }, {
	        hours: 'sun,tue,wed,thu:15:00 - 08:00 | mon 17:00 - 08:00',
	        map: 'http://google.com/maps/?saddr=merhavya street 19, tel aviv&daddr=' + encodeURIComponent('HaShuk St 38, Tel Aviv-Yafo, Israel') + '&dirflg=w',
	        link: 'http://www.rail.co.il/EN/DrivePlan/Pages/DrivePlan.aspx',
	        text: 'post office. you can get a SIM card here, check out an explenation <a target="_blank" href="http://www.gaytlvguide.com/do-see-go/get-local-israeli-sim-card-internet-3g-access">here</a>',
	        tags: 'sim card.post office',
	        name: 'Post office' }, { realhours: { mon_1_open: '10:00',
	            mon_1_close: '22:00',
	            tue_1_open: '10:00',
	            tue_1_close: '22:00',
	            wed_1_open: '10:00',
	            wed_1_close: '22:00',
	            thu_1_open: '10:00',
	            thu_1_close: '22:00',
	            fri_1_open: '10:00',
	            fri_1_close: '15:00',
	            sun_1_open: '10:00',
	            sun_1_close: '22:00' },
	        hours: 'mon-thu or sun:10:00-22:00 | fri:10:00-15:00',
	        map: 'https://www.google.com/maps?&daddr=32.05973075923%2C34.771474332046&dirflg=w',
	        link: 'http://facebook.com/garger.hazahav',
	        text: 'Hummus place with other nice salads and beer',
	        tags: 'hummus,saladas,beer,street food',
	        name: 'Gold Hummus' }, { realhours: undefined,
	        hours: 'mon-fri or sun:20:00-02:00',
	        map: 'https://www.google.com/maps?&daddr=32.0605782775%2C34.76947105&dirflg=w',
	        link: 'http://facebook.com/1466537460320270',
	        text: 'food,drink,music,hipster',
	        tags: 'A urban hipster restaurant by a famous weirdo chef. nice hang, open everyday beside Sunday. Might need to wait in line, better arrive early or very late',
	        name: 'Romano' }, { realhours: undefined,
	        hours: 'mon-thu or sun:07:00-17:00|fri:07:00-15:00',
	        map: 'https://www.google.com/maps?&daddr=32.059853445%2C34.77166673&dirflg=w',
	        link: 'http://facebook.com/levinsky41',
	        text: 'very good old-school coffee place. also a variety of natural gazoz syrup, made from real fresh fruits also serving healthy sandwiches made daily!',
	        tags: 'Coffee,Sandwiches,Gazoz',
	        name: 'Cafe Levinsky' }, { realhours: undefined,
	        hours: 'mon-sat or sun:10:00-00:00',
	        map: 'https://www.google.com/maps?&daddr=32.055809%2C34.7602386&dirflg=w',
	        link: 'http://facebook.com/casinosanremo',
	        text: 'Great place for brunch. They have occasional djs and shows.',
	        tags: 'drink,food,restaurant,jaffa',
	        name: 'Casino San Remo' }, { realhours: { mon_1_open: '07:00',
	            mon_1_close: '23:30',
	            tue_1_open: '07:00',
	            tue_1_close: '23:30',
	            wed_1_open: '07:00',
	            wed_1_close: '23:30',
	            thu_1_open: '07:00',
	            thu_1_close: '23:30',
	            fri_1_open: '07:00',
	            fri_1_close: '16:30',
	            sun_1_open: '07:00',
	            sun_1_close: '23:30' },
	        hours: 'mon-thu or sun:07:00-23:30 | fri:07:00-16:30',
	        map: 'https://www.google.com/maps?&daddr=%D7%9C%D7%95%D7%95%D7%99%D7%A0%D7%A1%D7%A7%D7%99%2049%20levinskey%2C%20Tell%20Abib&dirflg=w',
	        link: 'http://facebook.com/CaffeKaymak',
	        text: 'Great place for homemade food and drinks',
	        tags: 'drink,food,restaurant',
	        name: 'Caffe Kaymak' }, { realhours: { mon_1_open: '19:00',
	            mon_1_close: '05:00',
	            tue_1_open: '19:00',
	            tue_1_close: '05:00',
	            wed_1_open: '19:00',
	            wed_1_close: '05:00',
	            thu_1_open: '19:00',
	            thu_1_close: '05:00',
	            fri_1_open: '19:00',
	            fri_1_close: '05:00',
	            sat_1_open: '19:00',
	            sat_1_close: '05:00',
	            sun_1_open: '19:00',
	            sun_1_close: '05:00' },
	        hours: 'mon:19:00-05:00',
	        map: 'https://www.google.com/maps?&daddr=32.060512722671%2C34.770978123379&dirflg=w',
	        link: 'http://ofacebook.com/diegosantlv',
	        text: 'really nice korean-mexican vibe with djs and stuff and cool dishes',
	        tags: 'drink,food,restaurant,dj,vibes,Latin,Asian,hipster',
	        name: 'Diego San' }, { realhours: undefined,
	        hours: 'thursdays, sometimes fridays, check the website',
	        map: 'https://www.google.com/maps?&daddr=32.054357420577%2C34.779974431007&dirflg=w',
	        link: 'http://facebook.com/blockclubtlv',
	        text: 'The biggest club here (and in the middleeast?). Very big and sometimes packed, but the place is huge so its usually ok. Parties there are ususally on thursdays.',
	        tags: 'club,block,party,dance,music',
	        name: 'The Block' }, { realhours: { mon_1_open: '21:00',
	            mon_1_close: '05:00',
	            tue_1_open: '21:00',
	            tue_1_close: '05:00',
	            wed_1_open: '21:00',
	            wed_1_close: '05:00',
	            thu_1_open: '21:00',
	            thu_1_close: '05:00',
	            fri_1_open: '21:00',
	            fri_1_close: '05:00',
	            sat_1_open: '21:00',
	            sat_1_close: '05:00',
	            sun_1_open: '21:00',
	            sun_1_close: '05:00' },
	        hours: 'mon:21:00-05:00',
	        map: 'https://www.google.com/maps?&daddr=32.062178467787%2C34.77492047493&dirflg=w',
	        link: 'http://facebook.com/kulialma',
	        text: 'A nice hybrid of a club/bar/hipster artsy place',
	        tags: 'Music, Art, Snacks, dance',
	        name: 'KULI Alma' }, { realhours: undefined,
	        hours: 'mon-thu or sun:10:00-17:00',
	        map: 'https://www.google.com/maps?&daddr=32.062984958718%2C34.773240168526&dirflg=w',
	        link: 'http://facebook.com/237914799576331',
	        text: 'Indian restaurant. Cheap and delicious dishes',
	        tags: 'indian,restaurant,food',
	        name: 'Salam Bombay' }, { realhours: { mon_1_open: '09:00',
	            mon_1_close: '23:00',
	            tue_1_open: '09:00',
	            tue_1_close: '23:00',
	            wed_1_open: '09:00',
	            wed_1_close: '23:00',
	            thu_1_open: '09:00',
	            thu_1_close: '23:00',
	            fri_1_open: '09:00',
	            fri_1_close: '23:00',
	            sat_1_open: '12:00',
	            sat_1_close: '00:00',
	            sun_1_open: '09:00',
	            sun_1_close: '23:00' },
	        hours: 'mon-fri or sun:09:00-23:00 | sat:12:00-00:00',
	        map: 'https://www.google.com/maps?&daddr=32.062137133172%2C34.775140285492&dirflg=w',
	        link: 'http://facebook.com/auerbachrecords',
	        text: 'A hybrid of hipster bicycle shop and a vinyl saloon. Nice place for a beer or several.',
	        tags: 'vinyls,bicycle,hipsters,beer,drink',
	        name: 'Auerbach Records' }, { realhours: { mon_1_open: '12:00',
	            mon_1_close: '05:00',
	            tue_1_open: '12:00',
	            tue_1_close: '05:00',
	            wed_1_open: '12:00',
	            wed_1_close: '05:00',
	            thu_1_open: '12:00',
	            thu_1_close: '05:00',
	            fri_1_open: '12:00',
	            fri_1_close: '19:00',
	            sat_1_open: '12:00',
	            sat_1_close: '05:00',
	            sun_1_open: '12:00',
	            sun_1_close: '05:00' },
	        hours: 'mon-thu or sat-sat or sun:12:00-05:00 | fri:12:00-19:00',
	        map: 'https://www.google.com/maps?&daddr=32.064585096227%2C34.772167676058&dirflg=w',
	        link: 'http://facebook.com/193302427463816',
	        text: 'Very hipster place to eat by a famous chef. Usually theres music',
	        tags: 'hipster,food,music,drink,vinyl',
	        name: 'Port Said' }, { realhours: undefined,
	        hours: '24/7',
	        map: 'https://www.google.com/maps?&daddr=32.0699387%2C34.7702713&dirflg=w',
	        link: 'http://facebook.com/525794924182333',
	        text: 'Some would say a cornerstone of tel aviv bar scene. A 24/7 food & drinks Bar, located at the center of the Tel-Aviv',
	        tags: '24/7,bar,drink,food',
	        name: 'Minzar' }, { realhours: undefined,
	        hours: 'check website',
	        map: 'https://www.google.com/maps?&daddr=32.0708008%2C34.7832413&dirflg=w',
	        link: 'http://www.cinema.co.il/',
	        text: 'Cinema for mostly indie / quality films. Check the website, click "English" at the top',
	        tags: 'movies',
	        name: 'Cinematheque' }, { realhours: { mon_1_open: '10:00',
	            mon_1_close: '18:00',
	            tue_1_open: '10:00',
	            tue_1_close: '21:00',
	            wed_1_open: '10:00',
	            wed_1_close: '18:00',
	            thu_1_open: '10:00',
	            thu_1_close: '21:00',
	            fri_1_open: '10:00',
	            fri_1_close: '14:00',
	            sat_1_open: '10:00',
	            sat_1_close: '18:00' },
	        hours: 'mon or wed or sat:10:00-18:00 | tue or thu:10:00-21:00 | fri:10:00-14:00',
	        map: 'https://www.google.com/maps?&daddr=32.0773582%2C34.7867508&dirflg=w',
	        link: 'http://www.tamuseum.org.il/',
	        text: 'Tel Aviv Museum of art ',
	        tags: 'museum,art',
	        name: 'Museum of art' }, { realhours: { mon_1_open: '12:00',
	            mon_1_close: '01:00',
	            tue_1_open: '12:00',
	            tue_1_close: '01:00',
	            wed_1_open: '12:00',
	            wed_1_close: '01:00',
	            thu_1_open: '12:00',
	            thu_1_close: '01:00',
	            fri_1_open: '12:00',
	            fri_1_close: '01:00',
	            sat_1_open: '12:00',
	            sat_1_close: '01:00',
	            sun_1_open: '12:00',
	            sun_1_close: '01:00' },
	        hours: 'mon-sun:12:00-01:00',
	        map: 'https://www.google.com/maps?&daddr=32.059032084001%2C34.771194003487&dirflg=w',
	        link: 'http://facebook.com/barkayma',
	        text: 'Vegan and hippieish bar that is open every day until late. kitchen closes at midnight.',
	        tags: 'Pub-restaurant vegan',
	        name: 'Bar Kayma' }, { realhours: undefined,
	        hours: 'mon-sat:21:00-02:00',
	        map: 'https://www.google.com/maps?saddr=&daddr=32.0533638%2C34.7534027',
	        link: 'http://facebook.com/122465534486876',
	        text: 'A bar in the old city of jaffa, sometimes theres parties and djs there',
	        tags: 'bar,jaffa',
	        name: 'Anna Loulou' }, { name: 'Zvulon 10', text: 'nice place for beer and food' }, { name: 'Nanuchka', text: 'vegan bar-restaurant for gregorian food with a nice bar, might need reservations' }, { name: 'Benedict', text: 'they serve breakfast and pancakes 24/7' }, { name: 'Barby', text: 'Rock and other shows in this club. check out the website, there is a translate button', link: 'https://www.barby.co.il/' }, { name: 'Hanoi', text: 'Vietnamese restaurant. Might need to call or arrive early.' }, { name: 'Hakosem', tags: 'street food', text: 'famous falafel' }, { name: 'Miznon', tags: 'street food', text: 'mildly overpriced but very good street-food in a loud nice atmosphere' }, { name: 'סביח Sabich', tags: 'street food', text: 'famouse street food, pita bread with eggplant and other salads' }, { name: 'Ha\'achim', tags: 'food,drink', text: 'Nice restaurant with local food, cheap alchohol menu' }, { name: 'Container', tags: 'food,drink,jaffa,port' }, { realhours: { mon_1_open: '11:00',
	            mon_1_close: '23:00',
	            tue_1_open: '11:00',
	            tue_1_close: '23:00',
	            wed_1_open: '11:00',
	            wed_1_close: '23:00',
	            thu_1_open: '11:00',
	            thu_1_close: '23:00',
	            fri_1_open: '09:00',
	            fri_1_close: '17:00',
	            sun_1_open: '11:00',
	            sun_1_close: '23:00' },
	        hours: 'mon-thu or sun:11:00-23:00 | fri:09:00-17:00',
	        link: 'http://facebook.com/knaffe.banamal',
	        text: 'Knafe is an arabic desert and this place serves a boutique version of it',
	        name: 'כנאפה' }] };

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
	            lista.list.forEach(function (y) {
	                if (x.venue.name.toLowerCase().match(y.name.toLowerCase()) || y.name.toLowerCase().match(x.venue.name.toLowerCase())) {
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
	            if (lista.list.indexOf(match) === -1) {
	                lista.list.push(match);
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
	            _.map(lista.list, function (x) {
	                x.dist = getdist(x);
	            });
	            xupdate();
	        });
	    }
	    xupdate();
	});

	var getdist = function getdist(x) {
	    if (x && x.map && pos) {
	        var rgx = /daddr=(.*?)%2C(.*?)&/gim;
	        var match = rgx.exec(x.map);
	        if (match) {
	            var lat1 = parseFloat(match[1]);
	            var lng1 = parseFloat(match[2]);
	            var d = getDistanceFromLatLonInKm(lat1, lng1, pos.latitude, pos.longitude);
	            if (d < 1) {
	                !x.tags.match('near') && (x.tags += ',near');
	            } else if (d < 2) {
	                !x.tags.match('walking') && (x.tags += ',walking');
	            }

	            return (Math.round(d * 10) / 10).toFixed(1);
	        }
	    }
	};

	var Lista = _react2['default'].createClass({
	    displayName: 'Lista',

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
	        var lilista = _.map(lista.list.sort(function (a, b) {
	            return parseFloat(a.dist) - parseFloat(b.dist);
	        }), function (x) {
	            if (x.name && x.name.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || (x.tags === '*' || x.tags && x.tags.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) || x.text && x.text.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) {
	                return _react2['default'].createElement(
	                    'li',
	                    { className: 'listing' },
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
	                                "map" + i
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
	), document.body);

/***/ }

})