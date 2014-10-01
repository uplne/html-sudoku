/** @jsx React.DOM */
var SudokuApp = React.createClass({
    render: function() {
      return (
        <div className="sudoku js-sudoku">
        	<SudokuPlate />
        </div>
      );
    }
});

var SudokuPlate = React.createClass({
    render: function() {
	    return (
	      	<table cellpadding="0" cellspacing="0">
				<tbody>
				</tbody>
			</table>
	    );
    }
});

React.renderComponent(<SudokuApp />,  document.body);