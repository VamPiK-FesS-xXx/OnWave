import subscribe from '../../../icons/subscribe.svg'
import listenTrack from '../../../icons/tracks-listen-track.svg'
export const renderSearchResults = props => {
	return props.map(item => (
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
							<img
								src={item.artwork_url || item.avatar_url}
								alt=''
								className='user-avatar'
							/>
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
