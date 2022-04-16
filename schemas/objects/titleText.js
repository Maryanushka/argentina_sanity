import { MdInfo } from "react-icons/md";

export default {
	name: 'titleText',
	title: 'Title Text',
	type: 'object',
	icon: MdInfo,
	fields:[
		{
			title: "title",
			name: "title",
			type: "string",
		},
		{
			name: 'text',
			type: 'array',
			of: [ 
				{type: 'blockContent'},
			]
		},
		{
			title: 'Button link',
			name: 'buttonLink',
			type: 'imageTextLink',
		}
	],
	preview: {
		prepare() {
			return {
				title: 'Title Text'
			}
		},
	}
}