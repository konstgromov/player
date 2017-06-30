import React, { PureComponent } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ isAuthenticated, component: Component, render, ...rest }) => (
	<Route {...rest} render={props => (
		isAuthenticated ? render ? render(props) : <Component {...props} /> : <Redirect to="/login" />
	)} />
);

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

export default withRouter(connect(mapStateToProps)(PrivateRoute));