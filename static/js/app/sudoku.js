var sudoku = function() {
	var els = {
		holder: qwery(".js-sudoku"),
		cells : qwery(".sudoku__cell")
 	};

 	var api = {
 		init: function() {
 			this.bindEvents();
 		},

 		bindEvents: function() {
 			bean.on(els.holder[0], "click", els.cells, api.clickHandler);
 		},

 		clickHandler: function(e) {
 			console.log('click', e.target);
 		}
 	};

 	return api;
};