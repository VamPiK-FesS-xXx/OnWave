import { useEffect, useState } from 'react'
import './styles/browse.css'
import GetAccessTokenFromApi from '../clitentAPi/getAccessToken'
import { templatePlaylist } from './component/tempatePlaylist'
function BrowserMainPageLayout() {
	const accessToken = GetAccessTokenFromApi()
	const [playlist, setPlaylist] = useState([])
	async function getPlaylist() {
		try {
			let playlistParam = {
				method: 'GET',
				headers: {
					Accept: 'application/json; charset=utf-8',
					Authorization: 'Bearer ' + accessToken,
				},
			}
			const response = await fetch(
				'https://api.soundcloud.com/playlists?q=random_query',
				playlistParam
			)
			const data = await response.json()
			setPlaylist(data)
		} finally {
			console.log(1)
		}
	}
	useEffect(() => {
		getPlaylist()
	})
	// getPlaylist()
	return (
		<>
			<section className='browse'>
				<div className='browse-container'>
					<div className='container-content'>
						<h2 className='playlist-title'>Собрано специально для вас</h2>
						<div className='content-playlist'>{templatePlaylist(playlist)}</div>
					</div>
					<div className='container-content'>
						<h2 className='playlist-title'>Недавно играло</h2>
						<div className='content-playlist'>{templatePlaylist(playlist)}</div>
					</div>
				</div>
			</section>
		</>
	)
}
export { BrowserMainPageLayout as default }
