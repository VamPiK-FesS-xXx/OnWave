import './aside-style/aside-styles.css'
import Button from '../../../button/Button'

import followers from './icons/followers.svg'
import tracks from './icons/tracks.svg'
import plays from './icons/plays.svg'
import likes from './icons/like.svg'

import reposts from './icons/repost.svg'
function AsideMainMenu() {
	return (
		<>
			<section className='aside-menu'>
				<div className='menu-container'>
					<div className='container-content-menu'>
						<h2 className='menu-title'>Новые треки</h2>
						<div className='menu-content'>
							<div href='' className='menu-link-artist'></div>
							<div href='' className='menu-link-artist'></div>
							<div href='' className='menu-link-artist'></div>
							<div href='' className='menu-link-artist'></div>
						</div>
					</div>
					<div className='container-content-menu'>
						<h2 className='menu-title'>Артисты за которыми стоит следить</h2>
						<div className='menu-content should-follow-content'>
							<div className='content-artist'>
								<div className='artist-info'>
									<div href='' className='menu-link-artist should-follow'></div>
									<div className='info-statistics'>
										<span className='info-artist-name'>Onda Anda</span>

										<div className='container-statistics'>
											<img src={followers} alt='' className='statistic-ico' />
											<p className='statisctic-text'>1,777</p>
											<img src={tracks} alt='' className='statistic-ico' />
											<p className='statisctic-text'>22</p>
										</div>
									</div>
								</div>
								<Button>Подписаться</Button>
							</div>
							<div className='content-artist'>
								<div className='artist-info'>
									<div href='' className='menu-link-artist should-follow'></div>
									<div className='info-statistics'>
										<span className='info-artist-name'>Onda Anda</span>
										<div className='container-statistics'>
											<img src={followers} alt='' className='statistic-ico' />
											<p className='statisctic-text'>1,777</p>
											<img src={tracks} alt='' className='statistic-ico' />
											<p className='statisctic-text'>22</p>
										</div>
									</div>
								</div>
								<Button>Подписаться</Button>
							</div>
							<div className='content-artist'>
								<div className='artist-info'>
									<div href='' className='menu-link-artist should-follow'></div>
									<div className='info-statistics'>
										<span className='info-artist-name'>Onda Anda</span>
										<div className='container-statistics'>
											<img src={followers} alt='' className='statistic-ico' />
											<p className='statisctic-text'>1,777</p>
											<img src={tracks} alt='' className='statistic-ico' />
											<p className='statisctic-text'>22</p>
										</div>
									</div>
								</div>
								<Button>Подписаться</Button>
							</div>
						</div>
						<div className='menu-content likes-content'>
							<div className='content-title'>
								<h2 className='title-likes'>299 лайков</h2>
								<span className='subtitle-likes'>посмотреть все</span>
							</div>
							<div className='container-list-like'>
								<ul className='like-list'>
									<div className='list-like-item'>
										<span className='item-cover'></span>
										<div className='item-info'>
											<div className='info-item-container'>
												<div className='container-track-info'>
													<a href='' className='info-name-artist-item-url'>
														Onda Anda
													</a>
													<a href='' className='info-titile-track-item-url'>
														Игрушки
													</a>
												</div>
												<ul className='list-staticts'>
													<li className='staticts-item '>
														<span className='item-ico plays'>
															<img src={plays} alt='' />
														</span>
														<div className='item-num-of-static'>1.777</div>
													</li>
													<li className='staticts-item '>
														<span className='item-ico likes'>
															<img src={likes} alt='' />
														</span>
														<div className='item-num-of-static'>982</div>
													</li>
													<li className='staticts-item '>
														<span className='item-ico repost'>
															<img src={reposts} alt='' />
														</span>
														<div className='item-num-of-static'>2</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</ul>

								<ul className='like-list'>
									<div className='list-like-item'>
										<span className='item-cover'></span>
										<div className='item-info'>
											<div className='info-item-container'>
												<div className='container-track-info'>
													<a href='' className='info-name-artist-item-url'>
														Onda Anda
													</a>
													<a href='' className='info-titile-track-item-url'>
														Игрушки
													</a>
												</div>
												<ul className='list-staticts'>
													<li className='staticts-item '>
														<span className='item-ico plays'>
															<img src={plays} alt='' />
														</span>
														<div className='item-num-of-static'>1.777</div>
													</li>
													<li className='staticts-item '>
														<span className='item-ico likes'>
															<img src={likes} alt='' />
														</span>
														<div className='item-num-of-static'>982</div>
													</li>
													<li className='staticts-item '>
														<span className='item-ico repost'>
															<img src={reposts} alt='' />
														</span>
														<div className='item-num-of-static'>2</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</ul>
								<ul className='like-list'>
									<div className='list-like-item'>
										<span className='item-cover'></span>
										<div className='item-info'>
											<div className='info-item-container'>
												<div className='container-track-info'>
													<a href='' className='info-name-artist-item-url'>
														Onda Anda
													</a>
													<a href='' className='info-titile-track-item-url'>
														Игрушки
													</a>
												</div>
												<ul className='list-staticts'>
													<li className='staticts-item '>
														<span className='item-ico plays'>
															<img src={plays} alt='' />
														</span>
														<div className='item-num-of-static'>1.777</div>
													</li>
													<li className='staticts-item '>
														<span className='item-ico likes'>
															<img src={likes} alt='' />
														</span>
														<div className='item-num-of-static'>982</div>
													</li>
													<li className='staticts-item '>
														<span className='item-ico repost'>
															<img src={reposts} alt='' />
														</span>
														<div className='item-num-of-static'>2</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AsideMainMenu
