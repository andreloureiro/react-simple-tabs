var React = require('react');
var TabItem = require('./TabItem.jsx');
var TabContent = require('./TabContent.jsx');

var Tab = React.createClass({

	getInitialState : function () {
		return {
			data : [
				{
					hash : '#one',
					label : 'one',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, ipsum in blandit blandit, orci elit faucibus lectus, non laoreet nulla turpis at augue. Integer nunc libero, facilisis consectetur aliquam vel, tristique ut ante. Integer eu felis finibus, euismod nisl vitae, lacinia dolor. Nunc elit elit, congue sed est ut, cursus suscipit neque. Etiam euismod faucibus quam, eget fringilla tellus finibus non. Ut facilisis purus nisi, in ultricies tortor dapibus ut. Phasellus imperdiet massa nulla, a tincidunt lacus fringilla ac.'
				},
				{
					hash : '#two',
					label : 'two',
					content: 'Pellentesque tempus lorem turpis, non porttitor velit rutrum fermentum. Cras lectus lacus, tincidunt id mollis consequat, congue in nibh. Donec tellus dolor, vehicula ut enim eget, dignissim tristique dolor. Integer faucibus nunc nisl, at porta enim ullamcorper eget. Morbi convallis nisl nec ante auctor porta. In at cursus dolor. Cras vestibulum vel est in pharetra. Fusce nisl enim, blandit dignissim justo vitae, vestibulum ultrices urna.'
				},
				{
					hash : '#three',
					label : 'three',
					content: 'Quisque tempus arcu sit amet turpis gravida, vel pulvinar est mattis. Ut sed odio id elit rhoncus vehicula id sed libero. Integer interdum sapien sit amet mollis molestie. Fusce id enim sit amet elit scelerisque semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non euismod odio. Praesent ut turpis blandit, auctor ante non, laoreet sapien. '
				}
			],
			activeTab : ''
		}
	},

	componentWillMount : function () {
		var initialActiveTab = this.state.data[0].hash;
		location.hash == '' ? this.setState({ activeTab : initialActiveTab }) : this.setState({ activeTab : location.hash });
	},

	render: function () {

		var tabsItems = this.state.data.map(function (item) {
			return (
				<TabItem
				hashValue={ item.hash }
				label={ item.label } 
				activeTab={ this.state.activeTab == item.hash }
				onTabClick={ this._setActiveTab } />
			)
		}.bind(this));

		var tabsContent = this.state.data.map(function (item) {
			return (
				<TabContent
				content={ item.content }
				activeContent={ this.state.activeTab == item.hash } />
			)
		}.bind(this));

		return ( <div>
					<ul>
						{ tabsItems }
					</ul>
					{ tabsContent }
				</div> );
	},

	_setActiveTab : function (tab) {
		this.setState({ activeTab: tab });
	},
})

module.exports = Tab;