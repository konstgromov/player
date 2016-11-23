const React = require('react');
const { connect } = require('react-redux');

class Playlist extends React.PureComponent {
	render() {
		let content;

		if (this.props.playlist.length) {
			const playlist = this.props.playlist.map(function ({ author, name }, i) {
				return <li key={i}>{`${author} – ${name}`}</li>;
			});

			content = <ul>{playlist}</ul>;
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

module.exports = Playlist;