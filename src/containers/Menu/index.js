import './styles.scss';

import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from 'actionCreators';

function MenuItem({ path, text }) {
	return <li className="menu__item"><NavLink exact to={path} activeClassName="menu__item_active">{text}</NavLink></li>;
}

class Menu extends PureComponent {
	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	render() {
		const { isAuthenticated } = this.props;

		return (
			<ul className="menu">
				{isAuthenticated ? <MenuItem path="/" text="Playlist" /> : null}
				<MenuItem path="/login" text="Log In" />
				<MenuItem path="/signup" text="Sign Up" />
				{isAuthenticated ? <li className="menu__item"><a onClick={this.logout} href="/logout">Logout</a></li> : null}
			</ul>
		);
	}

	logout(event) {
		event.preventDefault();

		const { logout } = this.props.actions;

		logout();
	}
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ logout }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));