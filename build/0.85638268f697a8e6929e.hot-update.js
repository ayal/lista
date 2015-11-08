webpackHotUpdate(0,{

/***/ 202:
/***/ function(module, exports) {

	'use strict';

	var filter = function filter(x, y) {
	    return '<a class="filter" href="?term=' + (y !== undefined ? y : x) + '">' + x + '</a>';
	};

	var lista = { list: [] };
	module.exports = { lista: lista };

/***/ }

})