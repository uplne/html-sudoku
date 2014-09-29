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

	it("should bind events", function() {
		spyOn(sut, 'bindEvents');

		sut.init();

		expect(sut.bindEvents).toHaveBeenCalled();
	});

	xit("should detect click events", function() {
		spyOn(sut, 'clickHandler');

		bean.fire(qwery(".sudoku__cell")[0], 'click');

		expect(sut.clickHandler).toHaveBeenCalled();
	});

	it("should show number if cell is static", function() {
		sut.setCell(qwery(document.getElementById(0)), 8);
		expect(bonzo(qwery(document.getElementById(0)).hasClass("sudoku__cell--dynamic")).toBe(true);
		expect(document.getElementById(0).innerHTML).toEqual("<span>8</span>")
	});
});