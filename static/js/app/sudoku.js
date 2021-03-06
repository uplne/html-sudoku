var Sudoku = function() {
	var els = {
		holder: qwery(".js-sudoku"),
		cells : qwery(".sudoku__cell")
 	};

 	var isPickerRendered = false;

 	var easySudoku = [
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
 			this.renderSudoku();
 		},

 		bindEvents: function() {
 			bean.on(els.holder[0], "click", els.cells, api.clickHandler);
 		},

 		clickHandler: function(e) {
 			if (isPickerRendered) {
 				return false;
 			}

 			api.toggleActive(e.target);
 			api.renderPicker(e.target);
 		},

 		renderSudoku: function() {
 			for (var i = 0; i < 81; i++) {
 				var row       = Math.floor(i / 9),
 					col       = i % 9,
 					cell      = qwery(document.getElementById(i))[0],
 					cellValue = easySudoku[row][col];

 				api.setCell(cell, cellValue);
 			}
 		},

 		/**
 		 * If cell has value set it to this value else make it dynamic field.
 		 */
 		setCell: function(cell, cellValue) {
 			if (cellValue !== 0) {
				cell.innerHTML = "<span>" + cellValue + "</span>";
			} else {
				bonzo(cell).addClass("sudoku__cell--dynamic");
			}
 		},

 		/**
 		 * Called by clikHandler starts rendering the number picker
 		 *
 		 * @param {Object} element Clicked on element from event.target
 		 */
 		renderPicker: function(element) {
 			var picker = new NumberPicker(element);
 				picker.addToDOM();
 		},

 		/**
 		 * Add/remove is-active class
 		 */
 		toggleActive: function(element) {
 			var el = bonzo(element);

 			if (el.hasClass("is-active")) {
 				el.removeClass("is-active");
 				isPickerRendered = false;
 			} else {
 				el.addClass("is-active");
 				isPickerRendered = true;
 			}
 		}
 	};

 	return api;
};

var NumberPicker = function(element) {
	var els = {
		holder: null
	};

	var api = {
		addToDOM: function() {
			els.holder = qwery(".js-number-picker")[0];
			bonzo(element).html(bonzo(els.holder).html());

			api.bindEvents();
		},

		bindEvents: function() {
			bean.on(document.body, "click", qwery(".js-picker"), api.removeFromDOM);
		},

		removeFromDOM: function() {
			bonzo(element).html("");
		}
	};

	return api;
};