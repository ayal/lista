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

	var lista = { list: [{ name: 'AM:PM', tags: 'supplies,food,supermarket', text: 'Open all the time, a bit expensive', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0610061,34.7726299/@32.0600967,34.7699804,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en' }, { name: 'Merry Market', tags: 'supplies,food,supermarket', text: 'Grocery store open all the time, cheaper than AM:PM but smaller', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0590647,34.7736014/@32.0595488,34.7729953,18z/data=!4m9!4m8!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0!3e2?hl=en' }, { name: 'Sunset spot', tags: 'sunset,beach', text: 'A nice place to go watch the sunset. Its in the beginning of a street called "Arlozerov", on the south side of the hilton hotel. there is a nice garden there.  The beach at the bottom of the garden is also nice. You can take <a href="/?term=line 4">line 4 or line 5</a> to get there. Ask the driver to get down at Arlozerov street.', tags: 'sunset', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Hilton+Tel+Aviv,+Ha-Yarkon+St+205,+Tel+Aviv-Yafo,+6340506/@32.0741967,34.753034,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c768299324d:0xd54dd0137261b603!2m2!1d34.77089!2d32.089139!3e2?hl=en' }, { name: 'Sunset spot, Jaffa', tags: 'sunset,beach', text: 'A nice place to go watch the sunset.', tags: 'sunset', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0544015,34.7531036/@32.0540514,34.7532538,17z/data=!4m9!4m8!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0!3e2?hl=en' }, { name: 'line 4 or 5 station', 'text': 'take these lines from this station to get to the center/north of tel aviv. There is no real station you just stand in the corner and wait for them to arrive. they look like <a target="_blank" href="http://www.nrg.co.il/images/archive/300x225/1/423/686.jpg">this</a>. they operate even on the weekend and at night (though a bit less frequent than during the weekdays)', hours: '24/7', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/32.0608938,34.7739215/@32.0600371,34.7706351,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en', tags: 'public transport,bus,taxi,center,north' }, { name: 'TEDER.FM', 'text': 'nice place where a lot hipsters go. both a bar (downstairs) and a restaurant (upstrairs)', tags: 'food,drink,restaurant,bar,music,shows,dj,night', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Romano+Building,+Tel+Aviv-Yafo/@32.0596742,34.7684399,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9c10f80dd7:0x2438e7e0961ebac5!2m2!1d34.7694205!2d32.0605883?hl=en', hours: 'sun-thu:21:00+|weekend:16:00+', link: 'https://www.facebook.com/events/718848381593377/' }, { name: 'Beta and Grega', 'text': 'Very nice coffee place / bar with some food during the day and snacks at night', tags: 'food,drink,bar', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%AA%D7%94+%D7%95%D7%92%D7%A8%D7%99%D7%92%D7%94,+%D7%9C%D7%91%D7%95%D7%A0%D7%98%D7%99%D7%9F+2,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0602854,34.7706351,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d7c404227:0xcc1a581a58d261d8!2m2!1d34.7738534!2d32.0612942?hl=en', hours: '24/7' }, { name: 'Gold Hummus', 'text': 'Hummus restaurant', tags: 'food,hummus', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%92%D7%A8%D7%92%D7%A8+%D7%94%D7%96%D7%94%D7%91,+%D7%9C%D7%95%D7%99%D7%A0%D7%A1%D7%A7%D7%99+30,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0595147,34.7694424,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9dd284ccd5:0xb29ba8ccdbaba7b!2m2!1d34.7714255!2d32.0597072?hl=en', hours: 'weekdays:10:00-20:00' }, { name: 'Abu Hassan Hummus branch 1', 'text': 'Best Hummus restaurant in tel aviv (Jaffa)', tags: 'food,hummus,jaffa', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A2%D7%9C%D7%99+%D7%A7%D7%A8%D7%95%D7%90%D7%9F+%D7%90%D7%91%D7%95+%D7%97%D7%A1%D7%9F,+%D7%94%D7%93%D7%95%D7%9C%D7%A4%D7%99%D7%9F+1,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0550299,34.7521788,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cc80daafe67:0x129d4e2acf06abee!2m2!1d34.7508605!2d32.0501865!3e2?hl=en', hours: 'weekdays:09:00-15:00' }, { name: 'Abu Hassan Hummus branch 2', 'text': 'Best Hummus restaurant in tel aviv (Jaffa)', tags: 'food,hummus,jaffa', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A2%D7%9C%D7%99+%D7%A7%D7%A8%D7%90%D7%95%D7%95%D7%9F+%D7%90%D7%91%D7%95+%D7%97%D7%A1%D7%9F,+%D7%A9%D7%91%D7%98%D7%99+%D7%99%D7%A9%D7%A8%D7%90%D7%9C+14,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0543824,34.7601277,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cb9f8e71dcd:0x60406f6868e117bf!2m2!1d34.7574593!2d32.0494615!3e2?hl=en', hours: 'weekends:09:00-15:00' }, { name: 'Bicycle rent station', text: 'Station where you rent green bicycle. The full map of all the stations is <a target="blank" href="https://www.google.com/maps/d/viewer?mid=zdi_rVF5Mzjw.kbZqZIxGbWuc&hl">here</a>', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Sderot+Washington+15,+Tel+Aviv-Yafo/@32.0576879,34.7684299,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9f43628123:0x171874af5f92cb99!2m2!1d34.7695488!2d32.0561839?hl=en', tags: 'bicycle,telofun', hours: '24/7' }, { name: 'Tourist info center, Jaffa', tags: 'tourist,info', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/Tourist+Information+Center,+Tel+Aviv-Yafo/@32.0575303,34.7597386,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cbe97822df7:0x831a29df576eaee5!2m2!1d34.756791!2d32.055205!3e2?hl=en', hours: 'sun-thu 9:30-18:30|fri: 9:30-16:00|sat/holidays: 10:00-16:00' }, { name: 'Kaymak', text: 'Great place for food and drink', hours: 'weekdays:10:00-23:00,fri:10:00-15:00', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A7%D7%90%D7%99%D7%9E%D7%90%D7%A7,+%D7%9C%D7%95%D7%99%D7%A0%D7%A1%D7%A7%D7%99+49,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0594811,34.7699426,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9dc2567a87:0x70fbf779f1e90c66!2m2!1d34.7725742!2d32.0597242?hl=en', tags: 'drink,food,restaurant' }, { name: 'Barmitzvah', text: 'Great place for drinking at night', hours: 'weekday nights and sat night maybe also :)', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%A8%D7%9E%D7%A6%D7%95%D7%95%D7%94,+%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F+13,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0594852,34.7701238,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d948ff5a5:0xbb8996e5e91f6089!2m2!1d34.7729999!2d32.0600943?hl=en', tags: 'drink' }, { name: 'Casino San Remo', text: 'Great place for brunch. They have occasional djs and shows.', link: 'https://www.facebook.com/casinosanremo?fref=ts', hours: 'everyday till lateish', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%91%D7%A8%D7%9E%D7%A6%D7%95%D7%95%D7%94,+%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F+13,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0594852,34.7701238,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d948ff5a5:0xbb8996e5e91f6089!2m2!1d34.7729999!2d32.0600943?hl=en', tags: 'drink,food,restaurant' }, { name: 'Diego San', text: 'really nice korean-mexican vibe with djs and stuff and cool dishes', link: 'https://www.facebook.com/diegosantlv?fref=ts', hours: 'everyday 7:00 pm-5:00 am', map: 'https://www.google.co.il/maps/dir//%D7%93%D7%99%D7%99%D7%92%D7%95+%D7%A1%D7%90%D7%9F,+%D7%94%D7%9E%D7%A9%D7%91%D7%99%D7%A8+2,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0604755,34.7709159,17z/data=!4m12!1m3!3m2!1s0x151d4c9c35faa8df:0x429c191470614a91!2z15PXmdeZ15LXlSDXodeQ158!4m7!1m0!1m5!1m1!1s0x151d4c9c35faa8df:0x429c191470614a91!2m2!1d34.7709159!2d32.0604755?hl=en', tags: 'drink,food,restaurant,dj,vibes' }, { name: 'Flea Market', text: 'Nice area with restaurants and bars and fashion shops and second hand stores and anthiques.', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A4%D7%95%D7%A2%D7%94,+%D7%A8%D7%91%D7%99+%D7%99%D7%95%D7%97%D7%A0%D7%9F+3,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95%E2%80%AD/@32.0564579,34.7594825,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4cb94729057d:0x2b2a0d7cb7dc2930!2m2!1d34.7562843!2d32.0530602!3e2?hl=en', tags: 'second hand,clothes,market,flea,fashion' }, { name: 'The Block Club', text: 'The biggest club here (and in the middleeast?). Very big and sometimes packed, but the place is huge so its usually ok. Parties there are ususally on thursdays.', hours: 'thursdays or check the website', map: 'https://www.google.co.il/maps/place/The+Block/@32.0544742,34.7801078,17z/data=!3m1!4b1!4m2!3m1!1s0x151d4b672b196539:0x34982bc061158100?hl=en', link: 'https://www.facebook.com/blockclubtlv?fref=ts', tags: 'club,block,party,dance,music' }, { name: 'Kuli Alma', text: 'A nice hybrid of a club/bar/hipster artsy place', hours: 'Mon-Sun:9:00 pm-5:00 am', map: 'https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/KULI+ALMA,+Mikveh+Israel+St+10,+Tel+Aviv-Yafo/@32.0608256,34.7714324,17z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4b62ba091a25:0x8cbd422c87943544!2m2!1d34.7750588!2d32.0624342?hl=en', link: 'https://www.facebook.com/kulialma/info?tab=page_info', tags: 'club,block,party,dance,music' }, { name: 'Studio Naim', text: 'Very famous yoga studio. The map is for one specific but there are three branches. See maps and website. <a target="_blank" href="http://www.naim.org.il/en/memberships/">prices</a>', hours: 'see website', map: ['https://www.google.co.il/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo/%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95+%D7%A0%D7%A2%D7%99%D7%9D+-+%D7%99%D7%95%D7%92%D7%94,+%D7%A4%D7%99%D7%9C%D7%90%D7%98%D7%99%D7%A1,+%D7%9E%D7%97%D7%95%D7%9C,+%D7%93%D7%A8%D7%9A+%D7%A9%D7%9C%D7%9E%D7%94+46,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95,+66073%E2%80%AD/@32.0570674,34.7674,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4ca20e6cdb4d:0x981fc3cef6a7ff88!2m2!1d34.767489!2d32.054943!3e2?hl=en', 'https://www.google.com/maps/dir/%D7%9E%D7%A8%D7%97%D7%91%D7%99%D7%94+19,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95,+%D7%99%D7%A9%D7%A8%D7%90%D7%9C%E2%80%AD%E2%80%AD/32.0552788,34.7695408/@32.0572308,34.768548,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en', 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/32.0630026,34.7694669/@32.0612194,34.7687516,17z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m0?hl=en'], link: 'http://www.naim.org.il/en/', tags: 'yoga' }, { name: 'Yoga Levontin', text: 'Nice yoga studio. <a href="http://yogalev.com/pricelist">prices</a>', hours: 'see website', map: 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/Lavontin+St+7,+Tel+Aviv-Yafo,+Israel/@32.0605,34.7727496,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4b629673152b:0xb0ea26dabbf6d240!2m2!1d34.7749325!2d32.0617115!3e2?hl=en', link: 'http://yogalev.com/', tags: 'yoga' }, { name: 'Gordon Bennet / Auerbach', text: 'A hybrid of hipster bicycle shop and a vinyl saloon. Nice place for a beer or several.', hours: 'Mon-Fri: 9:00 am-11:00 pm | Sat: 12:00 pm-12:00 am | Sun:  9:00 am-11:00 pm', map: 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/%D7%92%D7%95%D7%A8%D7%93%D7%95%D7%9F+%D7%91%D7%A0%D7%98,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95,+%D7%99%D7%A9%D7%A8%D7%90%D7%9C%E2%80%AD/@32.0608256,34.7715962,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4b62b94cc701:0xc434c140ae754b1f!2m2!1d34.7750951!2d32.0620824!3e2?hl=en', link: 'https://www.facebook.com/auerbachrecords?fref=ts', tags: 'vinyls,bicycle,hipsters,beer,drink' }, { name: 'Salam bombey', text: 'Indian restaurant. Cheap and delicious dishes.', hours: 'during the day', map: 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/%D7%A1%D7%90%D7%9C%D7%9D+%D7%91%D7%95%D7%9E%D7%91%D7%99%D7%99,+%D7%90%D7%9C%D7%A0%D7%91%D7%99+124,+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%99%D7%A4%D7%95,+65818,+Israel%E2%80%AD/@32.0609772,34.7706351,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c9d4378cb77:0xcfbd52cfe23023a!2m2!1d34.7730886!2d32.0627625!3e2?hl=en', tags: 'indian,food' }, { name: 'Port Said', text: 'Very hipster place to eat by a famous chef. Usually theres music', hours: 'Mon-Thu: 12:00 pm-5:00 am | Fri: 12:00 pm-7:00 pm | Sat-Sun: 12:00 pm-5:00 am', map: 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/Port+Said,+Har+Sinai+Street,+Tel+Aviv-Yafo,+Israel/@32.0619899,34.7693488,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c82c4314bff:0xb2b99946e1680465!2m2!1d34.7722896!2d32.0647384!3e2?hl=en', link: 'https://www.facebook.com/pages/Port-Said/193302427463816?sk=info&tab=page_info', tags: 'hipster,food,music,drink' }, { name: 'Santa Katarina', text: 'Very hipster place to eat. A bit packed', hours: 'Mon-Thu: 5:30 pm-1:30 am | Fri: 12:30 pm-1:30 am |  Sat: 7:00 pm-1:30 am | Sun:5:30 pm-1:30 am', map: 'https://www.google.com/maps/dir/Merkhavya+St+19,+Tel+Aviv-Yafo,+Israel/Santa+Katarina,+Har+Sinai+Street+2,+Tel+Aviv-Yafo,+Israel/@32.0619899,34.7693488,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x151d4c9dd74e11db:0x53281f61e56b446f!2m2!1d34.7719245!2d32.0591828!1m5!1m1!1s0x151d4c82d19724e7:0x231035f58280cc0!2m2!1d34.7718868!2d32.0644351!3e2?hl=en', link: 'https://www.facebook.com/santakatarina2/info?tab=page_info', tags: 'hipster,food,music,drink' }, { realhours: { mon_1_open: '08:15',
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
	        map: 'https://www.google.com/maps?saddr=Merhavia%2019%20Tel%20Aviv&daddr=32.0599098,34.7716103&dirflg=w',
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
	        text: 'Train station',
	        tags: 'train,station',
	        name: 'Hahagana Train Station' }, {
	        hours: 'sun,tue,wed,thu:15:00 - 08:00 | mon 17:00 - 08:00',
	        map: 'http://google.com/maps/?saddr=merhavia street 19, tel aviv&dadrr=' + encodeURIComponent('Hashuk street 38, tel aviv') + '&dirflg=w',
	        link: 'http://www.rail.co.il/EN/DrivePlan/Pages/DrivePlan.aspx',
	        text: 'post office. you can get a SIM card here, check out an explenation <a target="_blank" href="http://www.gaytlvguide.com/do-see-go/get-local-israeli-sim-card-internet-3g-access">here</a>',
	        tags: 'sim card.post office',
	        name: 'Post office' }] };

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
	        var lilista = _.map(lista.list, function (x) {
	            if (x.name && x.name.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || x.tags && x.tags.toLowerCase().match(that.props.term && that.props.term.toLowerCase()) || x.text && x.text.toLowerCase().match(that.props.term && that.props.term.toLowerCase())) {
	                return _react2['default'].createElement(
	                    'li',
	                    { className: 'listing' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'name' },
	                        x.name
	                    ),
	                    _react2['default'].createElement(
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
	                    ),
	                    _react2['default'].createElement('div', { className: 'text', dangerouslySetInnerHTML: { __html: x.text } }),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'hours' },
	                        'Hours: ',
	                        x.hours
	                    ),
	                    x.link ? _react2['default'].createElement(
	                        'div',
	                        { className: 'link' },
	                        _react2['default'].createElement(
	                            'a',
	                            { target: '_blank', href: x.link },
	                            'website'
	                        )
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

	var App = _react2['default'].createClass({
	    displayName: 'App',

	    name: 'App',
	    mixins: [_reactRouter.Lifecycle, _reactRouter.History],
	    getInitialState: function getInitialState() {
	        return { term: '' };
	    },
	    componentWillMount: function componentWillMount() {
	        this.setState({ term: this.props.location.query.term });
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