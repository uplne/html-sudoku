describe("NumberPicker", function() {
	var sut;

	beforeEach(function() {
		fixtures.add('<div class="js-sudoku"><div id="0" class="sudoku__cell"></div></div>'
			+ '<div class="js-number-picker"><table class="number-picker js-picker" cellpadding="0" cellspacing="1"></div>');

		sut = new NumberPicker(qwery(".sudoku__cell")[0]);
	});

	afterEach(function() {
		fixtures.remove();
		sut = null;
	});

	it("should add picker to the DOM", function() {
		sut.addToDOM();

		expect(qwery(".sudoku__cell .number-picker").length).toEqual(1);
	});

	it("should bind events", function() {
		spyOn(sut, "bindEvents");

		sut.addToDOM();

		expect(sut.bindEvents).toHaveBeenCalled();
	});

	it("should close picker if user picked a number or clicked somewhere on the screen", function() {
		spyOn(sut, "removeFromDOM");

		sut.addToDOM();

		bean.fire(qwery(".js-picker")[0], 'click');

		expect(sut.removeFromDOM).toHaveBeenCalled();
	});
});