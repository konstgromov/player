import './styles.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { auth } from 'actionCreators';

class User extends PureComponent {
	constructor(props) {
		super(props);

		this.send = this.send.bind(this);
	}

	render() {
		let inputs;

		switch (this.props.type) {
			case 'login':
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
			case 'signup':
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
			<form className="user-form" onSubmit={this.send}>
				<ul className="user-form__tabs">
					<li><NavLink to="/login" activeClassName="user-form__tab_active">Log In</NavLink></li>
					<li><NavLink to="/signup" activeClassName="user-form__tab_active">Sign Up</NavLink></li>
				</ul>
				<ul className="user-form__inputs">{inputs.map((props, i) => <li key={i}><input {...props} /></li>)}</ul>
				<button className="user-form__button" type="submit">Send</button>
			</form>
		);
	}

	send(event) {
		event.preventDefault();

		const { type, actions: { auth } } = this.props;

		if (type === 'login') {
			auth();
		}
	}
}

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators({ auth }, dispatch)
});

export default withRouter(connect(null, mapDispatchToProps)(User));