import { useState } from 'react'
import RenderNavLinks from './render-components/navLinksTemplate'
import GetAccessTokenFromApi from '../clitentAPi/getAccessToken'
import RenderMainPageUrl from './render-components/getMainPageMenu'
import './styles/header.css'
import logo from '../../../public/logo/logo.svg'
import { renderSearchResults } from './render-components/renderSearchResults'

export default function Header() {
	const accessToken = GetAccessTokenFromApi()
	const [searchInput, setSearchInput] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)

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
								{renderSearchResults(searchResults)}
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
