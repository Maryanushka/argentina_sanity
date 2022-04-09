import { MdEmail } from "react-icons/md";

export default {
	title: 'Contact Form',
	name: 'contactForm',
	type: 'object',
	icon: MdEmail,
	fields: [
		{
			name: 'info',
			type: 'array',
			of: [ {type: 'blockContent'} ]
		},
		{
			name: 'title',
			title: 'Form Title',
			type: 'string',
		},	
	],
	preview: {
		prepare() {
			return {
				title: 'Contact'
			}
		},
	}
}