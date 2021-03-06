import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playerSetTime, playerPause } from 'actionCreators';

const handlers = {
	src(nextProp) {
		this.audio.src = nextProp;
	},
	status(nextProp) {
		switch (nextProp) {
			case 'play': 
				this.audio.play();
				break;
			case 'pause':
				this.audio.pause();
				break;
			default:
				throw new Error('Invalid status type.');
		}
	},
	time(nextProp) {
		if (this.audio.currentTime !== nextProp) {
			this.audio.currentTime = nextProp;
		}
	}
};

const PROP_NAMES = Object.keys(handlers);

class AudioPlayer extends PureComponent {
	constructor(props) {
		super(props);

		const audio = this.audio = new Audio();
		const { playerSetTime, playerPause } = this.props.actions;

		audio.addEventListener('canplay', () => {
			handlers.status.call(this, this.props.status);
		});

		audio.addEventListener('pause', () => {
			if (this.props.status !== 'pause') {
				playerPause();
			}
		});

		audio.addEventListener('timeupdate', () => {
			const time = this.audio.currentTime;

			playerSetTime(time);
		});

		this.applyProps(this.props, true);
	}

	componentWillReceiveProps(nextProps) {
		this.applyProps(nextProps);
	}

	render() {
		return null;
	}

	applyProps(nextProps, forced = false) {
		for (let i = 0; i < PROP_NAMES.length; i++) {
			const key = PROP_NAMES[i];
			const prevProp = this.props[key];
			const nextProp = nextProps[key];

			if (forced || prevProp !== nextProp) {
				handlers[key].call(this, nextProp);
			}
		}
	}
}

const mapStateToProps = ({ player: { src, status, time } }) => ({
	src,
	status,
	time
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ playerSetTime, playerPause }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);