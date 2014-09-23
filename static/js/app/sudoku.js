(function() {
	var els = {
		holder: qwery(".js-sudoku"),
		cells : qwery(".sudoku__cell")
 	};

 	var api = {
 		init: function() {
 			this.bindEvents();
 		},

 		bindEvents: function() {
 			bean.on(els.holder, "click", api.clickHandler);
 		},

 		clickHandler: function(e) {
 			console.log('click', e.target);
 		}
 	};

 	api.init();
}());