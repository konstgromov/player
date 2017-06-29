import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Playlist extends PureComponent {
	render() {
		const { playlist } = this.props;

		let content;

		if (playlist.length) {
			const items = playlist.map(({ author, name }, i) => {
				return <li key={i}>{`${author} – ${name}`}</li>;
			});

			content = <ul>{items}</ul>;
		} else {
			content = <p>Playlist is empty.</p>;
		}

		return (
			<div>
				<h2>Playlist</h2>
				{content}
			</div>
		);
	}
}

Playlist = connect(({ playlist }) => ({ playlist }))(Playlist);

export default Playlist;