import { MdAspectRatio } from "react-icons/md";

export default {
	name: 'intro',
	title: 'Intro',
	type: 'object',
	icon: MdAspectRatio,
	fields:[
		{
			name: 'title',
			type: 'string',
		},
		{
			name: "poster",
			type: "image",
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Intro',
			}
		},
	}
}