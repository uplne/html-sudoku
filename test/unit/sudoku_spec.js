describe("Sudoku", function() {
	var sut;

	beforeEach(function() {
		fixtures.add('<div class="js-sudoku"><div id="0" class="sudoku__cell"></div></div>');

		sut = new sudoku();
	});

	afterEach(function() {
		fixtures.remove();
	});

	it("should initialize", function() {
		spyOn(sut, 'init');

		sut.init();

		expect(sut.init).toHaveBeenCalled();
	});

	it("should call init methods", function() {
		spyOn(sut, 'bindEvents');
		spyOn(sut, 'renderSudoku');

		sut.init();

		expect(sut.bindEvents).toHaveBeenCalled();
		expect(sut.renderSudoku).toHaveBeenCalled();
	});

	it("should detect click events", function() {
		spyOn(sut, 'clickHandler');

		sut.bindEvents();

		bean.fire(qwery(".sudoku__cell")[0], 'click');

		expect(sut.clickHandler).toHaveBeenCalled();
	});

	describe("Render sudoku", function() {

		var element = null;

		beforeEach(function() {
			element = document.getElementById(0);
		});

		it("should show number if cell is static", function() {
			sut.setCell(qwery(element)[0], 8);
			expect(bonzo(qwery(element)[0]).hasClass("sudoku__cell")).toBe(true);
			expect(element.innerHTML).toEqual("<span>8</span>")
		});

		it("should not show number and set cell to dynamic when there is 0", function() {
			sut.setCell(qwery(element)[0], 0);
			expect(bonzo(qwery(element)[0]).hasClass("sudoku__cell--dynamic")).toBe(true);
			expect(element.innerHTML).toEqual("")
		});
	});

	describe("Open number picker", function() {
		it("shoud render number picker after click on dynamic field", function() {
			
		});
	});
});