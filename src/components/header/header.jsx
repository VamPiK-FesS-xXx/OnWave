import { useState } from 'react'

import { links } from '../../data/data-links'
import { dropDownLinks } from '../../data/data-dropdown-links'
import './styles/header.css'
export default function Header() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isOpen, setOpen] = useState(false)
	function TemplateNavLinks(props) {
		return (
			<li className='links-item'>
				<a
					href={props.link.path}
					className={props.isActive ? 'active-links-url' : 'links-url'}
					onClick={e => {
						e.preventDefault()
						props.onActivate()
					}}
				>
					{props.link.url}
				</a>
				<span
					className={`url-underline ${
						props.isActive ? 'active-underline' : ''
					}`}
				></span>
			</li>
		)
	}
	function RenderNavLinks() {
		return links.map((link, index) => (
			<TemplateNavLinks
				key={index}
				link={link}
				isActive={activeIndex === index}
				onActivate={() => setActiveIndex(index)}
			/>
		))
	}
	function TemplateDropdownLinks(props) {
		return (
			<li className='links-dropdown-item'>
				<a href={props.link.dropdownPath} className='dropdown-link'>
					{props.link.dropdownUrl}
				</a>
			</li>
		)
	}
	function RenderDropDownLinks() {
		return dropDownLinks.map((link, index) => (
			<TemplateDropdownLinks key={index} link={link} />
		))
	}
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
						<div className='container-dropdown'>
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
