import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import Async from 'components/Async';
import Menu from 'containers/Menu';
import AudioPlayer from 'containers/AudioPlayer';
import AudioPlayerView from 'containers/AudioPlayerView';
import NotFound from 'components/NotFound';

const getUser = () => import('containers/User');
const getPlaylist = () => import('containers/Playlist');

class App extends PureComponent {
	render() {
		return (
			<div>
				<Menu />
				<AudioPlayer />
				<AudioPlayerView />
				<Switch>
					<PrivateRoute exact path="/" render={() => <Async getComponent={getPlaylist} />} />
					<Route exact path="/login" render={() => <Async getComponent={getUser} type="login" />} />
					<Route exact path="/signup" render={() => <Async getComponent={getUser} type="signup" />} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);