import { useState, useRef, useEffect } from 'react'
import { useClickOutside } from '../../scripts/useClickOutside'
import RenderNavLinks from './navLinksTemplate'
import RenderDropDownLinks from './navDropdownLinks'
import './styles/header.css'
import logo from '../../../public/logo/logo.svg'
const CLIENT_ID = 'gITscv1hq8CWdM22JLhtJHp6qmygRiRv'
const CLIENT_SECRET = 'Dr8MOQh42CMKtL3xgUM8uORnkaIXxFTJ'
export default function Header() {
	const [accessToken, setAccessToken] = useState('')
	const [isOpen, setOpen] = useState(false)
	const [searchInput, setSearchInput] = useState('')
	const menuRef = useRef(null)
	useClickOutside(menuRef, () => {
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})
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
		console.log('вы искали пользователя ' + searchInput)

		const searchParams = {
			method: 'GET',
			headers: {
				Accept: 'application/json; charset=utf-8',
				Authorization: 'Bearer ' + accessToken,
			},
		}
		try {
			const response = await fetch(
				'https://api.soundcloud.com/users?q=' + searchInput,
				searchParams
			)
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			const users = await response.json()
			const firstUser = users[0]
			if (firstUser) {
				console.log('найден пользователь' + firstUser)
				console.log(`
					ID: ${firstUser.id}
					`)
			}
			return firstUser
		} catch {
			console.error('Ошибка при поиске пользователя:')
			return null
		}
	}
	searchAndDisplayUser().then(user => {
		if (user) {
			// Дополнительные действия с найденным пользователем
			console.log('Пользователь получен:', user.username)
		}
	})
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
							onKeyPress={event => {
								if (event.key === 'Enter') {
									searchAndDisplayUser()
								}
							}}
							onChange={event => setSearchInput(event.target.value)}
						/>
						<button
							className='input-search-btn'
							onClick={searchAndDisplayUser}
						></button>
					</div>
					<div className='container-main-page'>
						<a href='' className='main-page-url'>
							<img src='' alt='' className='main-url-avatar' />
						</a>
						<div className='container-dropdown' ref={menuRef}>
							<button
								className='dropdown-btn'
								onClick={() => setOpen(!isOpen)}
							></button>
							<nav
								className={
									isOpen ? 'active-dropdown-content' : 'dropdown-content'
								}
							>
								<ul className='dropdown-container-links'>
									<RenderDropDownLinks />
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
// 'dropdown-content'
