import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import Async from 'components/Async';
import Menu from 'containers/Menu';
import AudioPlayer from 'components/AudioPlayer';
import Playlist from 'containers/Playlist';
import NotFound from 'components/NotFound';

const getUser = () => import('containers/User');

class App extends PureComponent {
	render() {
		return (
			<div>
				<Menu />
				<AudioPlayer />
				<Switch>
					<PrivateRoute exact path="/" component={Playlist} />
					<Route exact path="/login" render={() => <Async getComponent={getUser} type="login" />} />
					<Route exact path="/signup" render={() => <Async getComponent={getUser} type="signup" />} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);