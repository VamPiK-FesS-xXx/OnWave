export const templatePlaylist = props => {
	return props.map(playlist => (
		<div key={playlist.id} className='content-container-playlist'>
			<div className='cover-playlist'>
				<img src={playlist.artwork_url} alt='' className='playlist-img' />
				<button className='playlist-play'></button>
			</div>
			<p className='playlist-text'>{playlist.title}</p>
			<p className='playlist-subtext'>{playlist.user.username}</p>
		</div>
	))
}
