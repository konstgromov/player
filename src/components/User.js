require('../styles/user.less');

const React = require('react');
const { Link } = require('react-router');
const axios = require('axios');

class User extends React.PureComponent {
	render() {
		let inputs;

		switch (this.props.location.pathname) {
			case '/log-in':
				inputs = [
					{
						ref: 'email',
						type: 'text',
						placeholder: 'E-mail'
					}, {
						ref: 'password',
						type: 'password',
						placeholder: 'Password'
					}
				];

				break;
			case '/sign-up':
				inputs = [
					{
						ref: 'name',
						type: 'text',
						placeholder: 'Name'
					}, {
						ref: 'email',
						type: 'text',
						placeholder: 'E-mail'
					}, {
						ref: 'password',
						type: 'password',
						placeholder: 'Password'
					}
				];

				break;
		}

		return (
			<form className="user-form" onSubmit={this.send.bind(this)}>
				<ul className="user-form__tabs">
					<li><Link to="/log-in" activeClassName="user-form__tab_active">Log In</Link></li>
					<li><Link to="/sign-up" activeClassName="user-form__tab_active">Sign Up</Link></li>
				</ul>
				<ul className="user-form__inputs">{inputs.map((props, i) => <li key={i}><input {...props} /></li>)}</ul>
				<button className="user-form__button" type="submit">Send</button>
			</form>
		);
	}

	send(event) {
		event.preventDefault();

		let path;

		switch (this.props.location.pathname) {
			case '/log-in':
				path = 'http://localhost:8000/api/token';
				break;
			case '/sign-up':
				path = 'http://localhost:8000/api/sign-up';
				break;
		}

		const data = {};

		for (let input in this.refs) {
			data[input] = this.refs[input].value;
		}

		axios({
			method: 'POST',
			url: path,
			data,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(
			(...args) => console.log(args),
			(...args) => console.log(args)
		);
	}
}

module.exports = User;