import { MdInfo } from "react-icons/md";

export default {
	name: 'cta',
	title: 'CTA',
	type: 'object',
	icon: MdInfo,
	fields:[
		{
			title: "Text",
			name: "text",
			type: "string",
		},
		{
			title: 'Button text',
			name: 'buttonText',
			type: 'string',
		}
	],
	preview: {
		prepare() {
			return {
				title: 'CTA'
			}
		},
	}
}