import { useState, useRef } from 'react'
import { useClickOutside } from '../../../scripts/useClickOutside.js'
import RenderDropDownLinks from './navDropdownLinks'

export default function RenderMainPageUrl() {
	const [isOpen, setOpen] = useState(false)
	const menuRef = useRef(null)
	useClickOutside(menuRef, () => {
		if (isOpen) setTimeout(() => setOpen(false), 50)
	})
	return (
		<>
			<a href='' className='main-page-url'>
				<img src='' alt='' className='main-url-avatar' />
			</a>
			<div className='container-dropdown' ref={menuRef}>
				<button
					className='dropdown-btn'
					onClick={() => setOpen(!isOpen)}
				></button>
				<nav
					className={isOpen ? 'active-dropdown-content' : 'dropdown-content'}
				>
					<ul className='dropdown-container-links'>
						<RenderDropDownLinks />
					</ul>
				</nav>
			</div>
		</>
	)
}
