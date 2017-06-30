import React, { PureComponent } from 'react';

const isMounted = Symbol('isMounted');

class Async extends PureComponent {
	constructor(props) {
		super(props);

		this.state = { Component: null };

		const { getComponent } = this.props;

		Promise.resolve(getComponent()).then((Component) => {
			if (Component.default) {
				Component = Component.default;
			}

			if (this[isMounted]) {
				this.setState({ Component });
			} else {
				this.state.Component = Component;
			}
		});
	}

	componentDidMount() {
		this[isMounted] = true;
	}

	render() {
		const { Component } = this.state;
		const { getComponent, ...rest } = this.props;

		return Component ? <Component {...rest} /> : null;
	}
}

export default Async;