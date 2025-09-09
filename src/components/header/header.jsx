import { useState, useRef } from 'react'
import { useClickOutside } from '../../scripts/useClickOutside'
import RenderNavLinks from './navLinksTemplate'
import RenderDropDownLinks from './navDropdownLinks'
import './styles/header.css'
export default function Header() {
	const [isOpen, setOpen] = useState(false)
	const menuRef = useRef(null)
	useClickOutside(menuRef, () => {
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})

	return (
		<>
			<header className='header'>
				<div className='header-container'>
					<div className='container-logo'>
						<a href='/' className='logo-link'>
							<img
								src='/public/logo/logo.svg'
								alt='OnWave-logo'
								className='logo-img'
							/>
						</a>
					</div>
					<nav className='list-container'>
						<ul className='container-links'>
							<RenderNavLinks />
						</ul>
					</nav>
					<div className='container-input'>
						<input type='text' className='input-search' placeholder='Поиск' />
						<button className='input-search-btn'></button>
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
