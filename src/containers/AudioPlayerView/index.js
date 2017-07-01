import './styles.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playerPlay, playerPause } from 'actionCreators';

class AudioPlayer extends PureComponent {
	render() {
		const { status, time, duration, actions: { playerPlay, playerPause } } = this.props;

		let button;

		switch (status) {
			case 'play':
				button = <button className="player__button" onClick={playerPause}>Pause</button>;
				break;
			case 'pause':
				button = <button className="player__button" onClick={playerPlay}>Play</button>;
				break;
		}

		return (
			<div className="player">
				{button}
				<div className="player__progress-bar">
					<div className="player__time-passed" style={{ width: `${time / duration * 100}%` }}></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ player: { src, status, time, duration } }) => ({
	src,
	status,
	time,
	duration
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ playerPlay, playerPause }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);