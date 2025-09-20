import { useEffect, useState } from 'react'
import { CLIENT_ID, CLIENT_SECRET } from './client'
export default function GetAccessTokenFromApi() {
	const [accessToken, setAccessToken] = useState('')
	useEffect(() => {
		let authParams = {
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
		fetch('https://api.soundcloud.com/oauth2/token', authParams)
			.then(response => response.json())
			.then(data => setAccessToken(data.access_token))
	}, [])
	return accessToken
}
