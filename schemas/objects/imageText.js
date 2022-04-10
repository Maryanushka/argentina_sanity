import { MdInfo } from "react-icons/md";

export default {
	name: 'imageText',
	title: 'Image Text',
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
			name: "poster",
			type: "image",
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
				title: 'Image Text'
			}
		},
	}
}