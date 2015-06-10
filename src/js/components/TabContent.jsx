var React = require('react');

var TabContent = React.createClass({

	render : function () {

		return (
			<div 
				className={ this.props.activeContent ? 'col-sm-12 content-show' : 'col-sm-12 content-hide' }
				dangerouslySetInnerHTML={{__html: this.props.content}}>
			</div>
		)
	}

});

module.exports = TabContent;