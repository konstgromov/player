import './styles.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playerChangeTrack } from 'actionCreators';

class Playlist extends PureComponent {
	render() {
		const { playlist, actions: { playerChangeTrack } } = this.props;

		let content;

		if (playlist.length) {
			const items = playlist.map((track, i) => {
				const { author, name } = track;

				return <li key={i} onClick={playerChangeTrack.bind(null, track)}>{`${author} – ${name}`}</li>;
			});

			content = <ul>{items}</ul>;
		} else {
			content = <p>Playlist is empty.</p>;
		}

		return (
			<div className="playlist">
				<h2 className="playlist__title">Playlist</h2>
				{content}
			</div>
		);
	}
}

const mapStateToProps = ({ playlist }) => ({ playlist });

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ playerChangeTrack }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);