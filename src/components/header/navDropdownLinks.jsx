import { dropDownLinks } from '../../data/data-dropdown-links'
function TemplateDropdownLinks(props) {
	return (
		<li className='links-dropdown-item'>
			<a href={props.link.dropdownPath} className='dropdown-link'>
				{props.link.dropdownUrl}
			</a>
		</li>
	)
}
export default function RenderDropDownLinks() {
	return dropDownLinks.map((link, index) => (
		<TemplateDropdownLinks key={index} link={link} />
	))
}
