// import { useEffect, useState } from 'react'
// import { CLIENT_ID, CLIENT_SECRET } from './client'
// export default function GetAccessTokenFromApi() {
// 	const [accessToken, setAccessToken] = useState('')
// 	useEffect(() => {
// 		let authParams = {
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
// 		fetch('https://api.soundcloud.com/oauth2/token', authParams)
// 			.then(response => response.json())
// 			.then(data => setAccessToken(data.access_token))
// 	}, [])
// 	return accessToken
// }
import { useEffect, useState } from 'react'
import { CLIENT_ID, CLIENT_SECRET } from './client'

export default function useSoundCloudToken() {
	const [accessToken, setAccessToken] = useState('')

	useEffect(() => {
		const STORAGE_KEY = 'sc_token'
		const TOKEN_EXPIRY_BUFFER = 5 * 60 * 1000 // 5 минут до фактического истечения

		// Проверяем сохраненный токен
		const storedToken = localStorage.getItem(STORAGE_KEY)
		const now = Date.now()

		if (storedToken) {
			try {
				const tokenData = JSON.parse(storedToken)

				// Если токен еще актуален
				if (now < tokenData.expires_at - TOKEN_EXPIRY_BUFFER) {
					setAccessToken(tokenData.access_token)
					return
				}
			} catch (error) {
				console.error('Error parsing stored token:', error)
				localStorage.removeItem(STORAGE_KEY)
			}
		}

		// Запрашиваем новый токен
		const authParams = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
		}

		fetch('https://api.soundcloud.com/oauth2/token', authParams)
			.then(response => response.json())
			.then(data => {
				if (data.access_token) {
					const tokenData = {
						access_token: data.access_token,
						expires_at: now + data.expires_in * 1000, // преобразуем секунды в мс
					}

					// Сохраняем в localStorage
					localStorage.setItem(STORAGE_KEY, JSON.stringify(tokenData))
					setAccessToken(data.access_token)
				} else {
					console.error('Token request failed:', data)
				}
			})
			.catch(error => console.error('Token fetch error:', error))
	}, [])

	return accessToken
}
