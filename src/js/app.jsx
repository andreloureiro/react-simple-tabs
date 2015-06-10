var React = require('react');
var Tabs = require('./components/Tabs.jsx');

var content = [
	{
		hash : '#one',
		label : 'one',
		content: '<h1>Lorem ipsum dolor sit amet</h1><p>consectetur adipiscing elit. Proin tristique, ipsum in blandit blandit, orci elit faucibus lectus, non laoreet nulla turpis at augue. Integer nunc libero, facilisis consectetur aliquam vel, tristique ut ante. Integer eu felis finibus, euismod nisl vitae, lacinia dolor. Nunc elit elit, congue sed est ut, cursus suscipit neque. Etiam euismod faucibus quam, eget fringilla tellus finibus non. Ut facilisis purus nisi, in ultricies tortor dapibus ut. Phasellus imperdiet massa nulla, a tincidunt lacus fringilla ac.</p>'
	},
	{
		hash : '#two',
		label : 'two',
		content: '<h1>Pellentesque tempus lorem turpis</h1>non porttitor velit rutrum fermentum. Cras lectus lacus, tincidunt id mollis consequat, congue in nibh. Donec tellus dolor, vehicula ut enim eget, dignissim tristique dolor. Integer faucibus nunc nisl, at porta enim ullamcorper eget. Morbi convallis nisl nec ante auctor porta. In at cursus dolor. Cras vestibulum vel est in pharetra. Fusce nisl enim, blandit dignissim justo vitae, vestibulum ultrices urna.'
	},
	{
		hash : '#three',
		label : 'three',
		content: '<h1>Quisque tempus arcu sit amet turpis gravida</h1>vel pulvinar est mattis. Ut sed odio id elit rhoncus vehicula id sed libero. Integer interdum sapien sit amet mollis molestie. Fusce id enim sit amet elit scelerisque semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non euismod odio. Praesent ut turpis blandit, auctor ante non, laoreet sapien. '
	}
];

React.render(<Tabs content={ content } />, document.body);