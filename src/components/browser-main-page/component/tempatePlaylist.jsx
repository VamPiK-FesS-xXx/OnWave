export const templatePlaylist = props => {
	return props.map(playlist => (
		<div key={playlist.id} className='content-container-playlist'>
			<img src={playlist.artwork_url} alt='' className='playlist-img' />
			<p className='playlist-text'>{playlist.title}</p>
			<p className='playlist-subtext'>{playlist.user.first_name}</p>
			<button className='playlist-play'></button>
		</div>
	))
}
