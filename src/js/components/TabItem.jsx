var React = require('react');

var TabItem = React.createClass({

	render: function () {

		var _hashValue = this.props.hashValue;

		return (
			<div className="col-sm-3 no-padding">
				<a 
					href={ _hashValue } 
					className={ this.props.activeTab ? 'tab tab-active' : 'tab' }
					onClick={ this.props.onTabClick.bind(null, _hashValue) }>
						{ this.props.label }
				</a>
			</div>
		)
	}
});

module.exports = TabItem;