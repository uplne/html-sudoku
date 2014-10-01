/** @jsx React.DOM */
var SudokuApp = React.createClass({displayName: 'SudokuApp',
    render: function() {
      return (
        React.DOM.div({className: "sudoku js-sudoku"}, 
        	SudokuPlate(null)
        )
      );
    }
});

var SudokuPlate = React.createClass({displayName: 'SudokuPlate',
    render: function() {
	    return (
	      	React.DOM.table({cellpadding: "0", cellspacing: "0"}, 
				React.DOM.tbody(null
				)
			)
	    );
    }
});

React.renderComponent(SudokuApp(null),  document.body);