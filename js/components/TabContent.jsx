var React = require('react');

var TabContent = React.createClass({

	render : function () {		

		return (
			<div className={ this.props.activeContent ? 'content-show' : 'content-hide' }>
				{ this.props.content }
			</div>
		)
	}

});

module.exports = TabContent;