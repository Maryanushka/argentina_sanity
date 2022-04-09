import { AiFillYoutube } from "react-icons/ai";

export default {
	title: 'YouTube',
	name: 'youtube',
	type: 'object',
	icon: AiFillYoutube,
	fields: [
		{
			title: 'YouTube URL',
			name: 'url',
			type: 'url',
			validation: Rule => Rule.required()
		}
	],
	preview: {
		prepare() {
			return {
				title: 'Youtube Video'
			}
		},
	}
}