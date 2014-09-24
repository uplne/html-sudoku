describe("Sudoku", function() {
	var sut;

	beforeEach(function() {
		sut = new sudoku();

		document.body.append('<div class="js-sudoku"><div class="sudoku__cell"></div></div>)');
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

	it("should detect click events", function() {
		spyOn(sut, 'clickHandler');

		bean.fire(qwery(".js-sudoku"), 'click');

		expect(sut.clickHandler).toHaveBeenCalled();
	});
});