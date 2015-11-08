webpackHotUpdate(0,{

/***/ 202:
/***/ function(module, exports) {

	'use strict';

	var filter = function filter(x, y) {
	  return '<a class="filter" href="?term=' + (y !== undefined ? y : x) + '">' + x + '</a>';
	};

	var lista = { list: [{ realhours: { mon_1_open: '11:00',
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
	    tags: 'train,station,transportation,basic',
	    name: 'Ha\'hagana Train Station' }, {
	    hours: 'sun,tue,wed,thu:15:00 - 08:00 | mon 17:00 - 08:00',
	    map: 'http://google.com/maps/?saddr=&daddr=' + encodeURIComponent('HaShuk St 38, Tel Aviv-Yafo, Israel') + '&dirflg=w',
	    link: '',
	    text: 'post office.',
	    tags: 'post office',
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
	    orig: '528e45b011d2161a074a202e',
	    name: 'knafe' }, { name: 'Dizengoff Center', text: 'Big mall with many things. One store named "Bug" for computer supply is on the bottom floor (ask people where it is) - it has a representative of a cellular firm called "Golan Telecom" from which you can buy a SIM card with credit card and passport. it should cost ~$12 for the SIM and then you need to choose a plan, for example i think they have ~$20 for no limit calls in israel and 6GB data plan. remember to cancel before you leave!', tags: 'sim card,basic' }, { name: 'ATM and bank', text: 'ATM and bank leumi. ATM open 24 hrs', hours: 'mon-fri:08:30-12:00', map: 'http://google.com/maps/?saddr=&daddr=' + encodeURIComponent('32.0604719,34.7692777') + '&dirflg=w', tags: '' }] };

	module.exports = { lista: lista };

/***/ }

})