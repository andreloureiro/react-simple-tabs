var React = require('react');

var TabItem = React.createClass({

	render: function () {

		var _hashValue = this.props.hashValue;

		return (
			<li>
				<a 
					href={ _hashValue } 
					className={ this.props.activeTab ? 'tab-active' : '' }
					onClick={ this.props.onTabClick.bind(null, _hashValue) }>
						{ this.props.label }
				</a>
			</li>
		)
	}
});

module.exports = TabItem;