import { useState, useEffect } from 'react'
import RenderNavLinks from './render-components/navLinksTemplate'
import RenderMainPageUrl from './render-components/getMainPageMenu'
import './styles/header.css'
import logo from '../../../public/logo/logo.svg'
import subscribe from '../../icons/subscribe.svg'
import listenTrack from '../../icons/tracks-listen-track.svg'
import { CLIENT_ID, CLIENT_SECRET } from '../clitentAPi/client'
export default function Header() {
	const [accessToken, setAccessToken] = useState('')
	const [searchInput, setSearchInput] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		let authParam = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json; charset=utf-8',
				Authorization: 'CLIENT_ID; CLIENT_SECRET',
			},

			body:
				'grant_type=client_credentials&client_id=' +
				CLIENT_ID +
				'&client_secret=' +
				CLIENT_SECRET,
		}
		fetch('https://api.soundcloud.com/oauth2/token', authParam)
			.then(result => result.json())
			.then(data => setAccessToken(data.access_token))
	}, [])
	async function searchAndDisplayUser() {
		if (!searchInput) return
		console.log('вы искали пользователя ' + searchInput)
		let searchParams = {
			method: 'GET',
			headers: {
				Accept: 'application/json; charset=utf-8',
				Authorization: 'Bearer ' + accessToken,
			},
		}
		try {
			const userResponse = await fetch(
				'https://api.soundcloud.com/users?q=' + searchInput + '&limit=2',
				searchParams
			)
			const users = await userResponse.json()
			console.log(users)
			const trackResponse = await fetch(
				'https://api.soundcloud.com/tracks?q=' + searchInput + '&limit=2',
				searchParams
			)
			const tracks = await trackResponse.json()
			console.log(tracks)
			const results = [
				...users.map(user => ({ ...user, type: 'user' })),
				...tracks.map(track => ({ ...track, type: 'track' })),
			]

			setSearchResults(results) // сохраняем все реузльтаты
		} finally {
			setIsLoading(false)
		}
	}
	const handleInputChange = () => {
		setSearchInput(event.target.value)
		if (event.target.value.trim() === '') {
			setSearchResults([])
		}
	}
	const handleKeyPress = () => {
		if (event.key === 'Enter') {
			searchAndDisplayUser()
		}
	}
	//функция для отображения результата
	const renderSearchResults = () => {
		return searchResults.map(item => (
			<>
				<div key={item.id} className='results-container'>
					{item.type === 'user' ? (
						<>
							<div className='continer-user-avatar'>
								<img src={item.avatar_url} alt='' className='user-avatar' />
								<p className='username-track-name'>{item.username}</p>
							</div>
							<div className='container-ico'>
								<img src={subscribe} alt='' className='ico-result' />
							</div>
						</>
					) : (
						<>
							<div className='continer-user-avatar'>
								<img src={item.artwork_url} alt='' className='user-avatar' />
								<p className='username-track-name'>{item.title}</p>
							</div>
							<div className='container-ico'>
								<img src={listenTrack} alt='' className='ico-result' />
							</div>
						</>
					)}
				</div>
			</>
		))
	}
	return (
		<>
			<header className='header'>
				<div className='header-container'>
					<div className='container-logo'>
						<a href='/' className='logo-link'>
							<img src={logo} alt='OnWave-logo' className='logo-img' />
						</a>
					</div>
					<nav className='list-container'>
						<ul className='container-links'>
							<RenderNavLinks />
						</ul>
					</nav>
					<div className='container-input'>
						<input
							type='text'
							className='input-search'
							placeholder='Поиск'
							value={searchInput}
							onKeyPress={handleKeyPress}
							onChange={handleInputChange}
						/>
						<button
							className='input-search-btn'
							onClick={searchAndDisplayUser}
							disabled={isLoading}
						></button>
						<div className='container-search-users-tracks'>
							<div className='container-search-results'>
								{renderSearchResults()}
							</div>
						</div>
					</div>
					<div className='container-main-page'>
						<RenderMainPageUrl />
					</div>
				</div>
			</header>
		</>
	)
}
// 'dropdown-content'
