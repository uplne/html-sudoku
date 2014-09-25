var sudoku = function() {
	var els = {
		holder: qwery(".js-sudoku"),
		cells : qwery(".sudoku__cell")
 	};

 	var easyPuzzle = [
	    [5, 3, 0, 0, 7, 0, 0, 0, 0],
	    [6, 0, 0, 1, 9, 5, 0, 0, 0],
	    [0, 9, 8, 0, 0, 0, 0, 6, 0],
	    [8, 0, 0, 0, 6, 0, 0, 0, 3],
	    [4, 0, 0, 8, 0, 3, 0, 0, 1],
	    [7, 0, 0, 0, 2, 0, 0, 0, 6],
	    [0, 6, 0, 0, 0, 0, 2, 8, 0],
	    [0, 0, 0, 4, 1, 9, 0, 0, 5],
	    [0, 0, 0, 0, 8, 0, 0, 7, 9]
	];

 	var api = {
 		init: function() {
 			this.bindEvents();
 			this.renderPuzzle();
 		},

 		bindEvents: function() {
 			bean.on(els.holder[0], "click", els.cells, api.clickHandler);
 		},

 		clickHandler: function(e) {
 			console.log('click', e.target);
 		},

 		renderPuzzle: function() {
 			for (var i = 0; i < 81; i++) {
 				var row = Math.floor(i / 9),
 					col = i % 9;

 				document.getElementById(i).innerHTML = "<span>" + easyPuzzle[row][col] + "</span>";
 			}
 		}
 	};

 	return api;
};