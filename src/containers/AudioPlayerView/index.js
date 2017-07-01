import './styles.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playerSetTime, playerPlay, playerPause } from 'actionCreators';

class AudioPlayer extends PureComponent {
	constructor(props) {
		super(props);

		this.onProgressClick = this.onProgressClick.bind(this);
	}

	onProgressClick({ clientX }) {
		const { duration, actions: { playerSetTime } } = this.props;
		const { progress } = this.refs;
		const progressRect = progress.getBoundingClientRect();
		const coef = (clientX - progressRect.left) / progressRect.width;

		playerSetTime(duration * coef);
	}

	render() {
		const { author, name, status, time, duration, actions: { playerPlay, playerPause } } = this.props;

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
				<div className="player__title">{`${author} – ${name}`}</div>
				<div>
					{button}
					<div ref="progress" className="player__progress-bar" onClick={this.onProgressClick}>
						<div className="player__time-passed" style={{ width: `${time / duration * 100}%` }}></div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ player: { src, author, name, status, time, duration } }) => ({
	src,
	author,
	name,
	status,
	time,
	duration
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ playerSetTime, playerPlay, playerPause }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);