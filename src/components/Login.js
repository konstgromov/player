const React = require('react');

class Login extends React.PureComponent {
	render() {
		return (
			<form onSubmit={(event) => event.preventDefault()}>
				<h2>Login</h2>
				<input type="text" placeholder="E-mail" />
				<input type="text" placeholder="Password" />
				<button type="submit">Send</button>
			</form>
		);
	}
}

module.exports = Login;