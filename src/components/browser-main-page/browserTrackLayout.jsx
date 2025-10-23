import { useEffect, useState } from 'react'
import './styles/browse.css'
import GetAccessTokenFromApi from '../clitentAPi/getAccessToken'
import { templatePlaylist } from './component/tempatePlaylist'
import AsideMainMenu from './component/left-aside-menu/LeftAsideMenuLayout'
function BrowserMainPageLayout() {
	const accessToken = GetAccessTokenFromApi()
	const [playlist, setPlaylist] = useState([])

	// async function getPlaylist() {
	// 	try {
	// 		let playlistParam = {
	// 			method: 'GET',
	// 			headers: {
	// 				Accept: 'application/json; charset=utf-8',
	// 				Authorization: 'Bearer ' + accessToken,
	// 			},
	// 		}
	// 		const response = await fetch(
	// 			'https://api.soundcloud.com/playlists',
	// 			playlistParam
	// 		)
	// 		const data = await response.json()
	// 		setPlaylist(data)
	// 		console.log(data)
	// 	} finally {
	// 		console.log(1)
	// 	}
	// }

	useEffect(() => {
		const fetchPlaylist = async () => {
			const playlistParam = {
				method: 'GET',
				headers: {
					Accept: 'application/json; charset=utf-8',
					Authorization: 'Bearer ' + accessToken,
				},
			}
			const response = await fetch(
				'https://api.soundcloud.com/tracks',
				playlistParam
			)
			const data = await response.json()
			setPlaylist(data)
			console.log(data)
		}
		fetchPlaylist()
	}, [accessToken])

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
				<AsideMainMenu />
			</section>
		</>
	)
}
export { BrowserMainPageLayout as default }
