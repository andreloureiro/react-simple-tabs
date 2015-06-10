var React = require('react');
var TabItem = require('./TabItem.jsx');
var TabContent = require('./TabContent.jsx');

var Tabs = React.createClass({

	getInitialState : function () {
		return {
			activeTab : ''
		}
	},

	componentDidMount : function () {
		var initialActiveTab = this.props.content[0].hash;
		location.hash == '' ? this.setState({ activeTab : initialActiveTab }) : this.setState({ activeTab : location.hash });
	},

	render: function () {

		var tabsItems = this.props.content.map(function (item) {
			return (
				<TabItem
				hashValue={ item.hash }
				label={ item.label } 
				activeTab={ this.state.activeTab == item.hash }
				onTabClick={ this._setActiveTab } />
			)
		}.bind(this));

		var tabsContent = this.props.content.map(function (item) {
			return (
				<TabContent
				content={ item.content }
				activeContent={ this.state.activeTab == item.hash } />
			)
		}.bind(this));

		return (
			<div>
				<div className="row">
					{ tabsItems }
					
				</div>

				<div className="row">
					{ tabsContent }
				</div>
			</div>
		);
	},

	_setActiveTab : function (tab) {
		this.setState({ activeTab: tab });
	},
})

module.exports = Tabs;