// import { CLIENT_SECRET, CLIENT_ID } from '../../clitentAPi/client'
// import { useState, useEffect } from 'react'
// import subscribe from '../../icons/subscribe.svg'
// import listenTrack from '../../icons/tracks-listen-track.svg'
// function SearchUserOrTrack() {
// 	const [accessToken, setAccessToken] = useState('')
// 	const [searchInput, setSearchInput] = useState('')
// 	const [searchResults, setSearchResults] = useState([])
// 	const [isLoading, setIsLoading] = useState(false)
// 	useEffect(() => {
// 		let authParam = {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/x-www-form-urlencoded',
// 				Accept: 'application/json; charset=utf-8',
// 				Authorization: 'CLIENT_ID; CLIENT_SECRET',
// 			},

// 			body:
// 				'grant_type=client_credentials&client_id=' +
// 				CLIENT_ID +
// 				'&client_secret=' +
// 				CLIENT_SECRET,
// 		}
// 		fetch('https://api.soundcloud.com/oauth2/token', authParam)
// 			.then(result => result.json())
// 			.then(data => setAccessToken(data.access_token))
// 	}, [])
// 	async function searchAndDisplayUser() {
// 		if (!searchInput) return
// 		console.log('вы искали пользователя ' + searchInput)
// 		let searchParams = {
// 			method: 'GET',
// 			headers: {
// 				Accept: 'application/json; charset=utf-8',
// 				Authorization: 'Bearer ' + accessToken,
// 			},
// 		}
// 		try {
// 			const userResponse = await fetch(
// 				'https://api.soundcloud.com/users?q=' + searchInput + '&limit=2',
// 				searchParams
// 			)
// 			const users = await userResponse.json()
// 			console.log(users)
// 			const trackResponse = await fetch(
// 				'https://api.soundcloud.com/tracks?q=' + searchInput + '&limit=2',
// 				searchParams
// 			)
// 			const tracks = await trackResponse.json()
// 			console.log(tracks)
// 			const results = [
// 				...users.map(user => ({ ...user, type: 'user' })),
// 				...tracks.map(track => ({ ...track, type: 'track' })),
// 			]

// 			setSearchResults(results) // сохраняем все реузльтаты
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}
// 	const handleInputChange = () => {
// 		setSearchInput(event.target.value)
// 		if (event.target.value.trim() === '') {
// 			setSearchResults([])
// 		}
// 	}
// 	const handleKeyPress = () => {
// 		if (event.key === 'Enter') {
// 			searchAndDisplayUser()
// 		}
// 	}
// 	//функция для отображения результата
// 	const renderSearchResults = () => {
// 		return searchResults.map(item => (
// 			<>
// 				<div key={item.id} className='results-container'>
// 					{item.type === 'user' ? (
// 						<>
// 							<div className='continer-user-avatar'>
// 								<img src={item.avatar_url} alt='' className='user-avatar' />
// 								<p className='username-track-name'>{item.username}</p>
// 							</div>
// 							<div className='container-ico'>
// 								<img src={subscribe} alt='' className='ico-result' />
// 							</div>
// 						</>
// 					) : (
// 						<>
// 							<div className='continer-user-avatar'>
// 								<img src={item.artwork_url} alt='' className='user-avatar' />
// 								<p className='username-track-name'>{item.title}</p>
// 							</div>
// 							<div className='container-ico'>
// 								<img src={listenTrack} alt='' className='ico-result' />
// 							</div>
// 						</>
// 					)}
// 				</div>
// 			</>
// 		))
// 	}
// }
// export { SearchUserOrTrack as default }
