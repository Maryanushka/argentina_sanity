import { MdInfo } from "react-icons/md";

export default {
	name: 'imageText',
	title: 'Image Text',
	type: 'object',
	icon: MdInfo,
	fields:[
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
	],
	preview: {
		prepare() {
			return {
				title: 'Image Text'
			}
		},
	}
}