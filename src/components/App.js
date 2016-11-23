const React = require('react');
const { Link } = require('react-router');

class App extends React.PureComponent {
	render() {
		return React.Children.only(this.props.children);
	}
}

module.exports = App;