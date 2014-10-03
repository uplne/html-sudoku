describe("NumberPicker", function() {
	var sut;

	beforeEach(function() {
		fixtures.add('<div class="js-sudoku"><div id="0" class="sudoku__cell"></div></div>'
			+ '<div class="js-number-picker"><table class="number-picker" cellpadding="0" cellspacing="1"></div>');
	});

	afterEach(function() {
		fixtures.remove();
		sut = null;
	});

	it("should add picker to the DOM", function() {
		sut = new NumberPicker(qwery(".sudoku__cell")[0]);
		sut.addToDOM();

		expect(qwery(".sudoku__cell .number-picker").length).toEqual(1);
	});
});