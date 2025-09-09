import { links } from '../../data/data-links'
import { useState } from 'react'

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
				className={`url-underline ${props.isActive ? 'active-underline' : ''}`}
			></span>
		</li>
	)
}
export default function RenderNavLinks() {
	const [activeIndex, setActiveIndex] = useState(0)

	return links.map((link, index) => (
		<TemplateNavLinks
			key={index}
			link={link}
			isActive={activeIndex === index}
			onActivate={() => setActiveIndex(index)}
		/>
	))
}
