import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Playlist from 'containers/Playlist';
import User from 'components/User';
import NotFound from 'components/NotFound';

class App extends PureComponent {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Playlist} />
				<Route exact path="/log-in" render={() => <User type="log-in" />} />
				<Route exact path="/sign-up" render={() => <User type="sign-up" />} />
				<Route component={NotFound} />
			</Switch>
		);
	}
}

App = withRouter(App);

export default App;