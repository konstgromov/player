module.exports = function (store) {
	return {
		path: '/',
		component: require('./components/App'),
		indexRoute: {
			component: require('./containers/Playlist')
		},
		childRoutes: [
			{
				path: '/log-in',
				component: require('./components/User')
			}, {
				path: '/sign-up',
				component: require('./components/User')
			}, {
				path: '*',
				component: require('./components/NotFound')
			}
		]
	};
};