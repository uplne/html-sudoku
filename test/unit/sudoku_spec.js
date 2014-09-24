describe("Sudoku", function() {
	var sut;

	beforeEach(function() {
		fixtures.add('<div class="js-sudoku"><div class="sudoku__cell"></div></div>');

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
});