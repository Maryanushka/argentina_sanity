import { SiSlides } from "react-icons/si";

export default{
	name: 'sliderYoutube',
	title: 'Slider YT Videos',
	type: 'object',
	icon: SiSlides,
	fields: [
		{
			title: "title",
			name: "title",
			type: "string",
		},
		{
			name: 'list',
			type: 'array',
			of: [
				{
					name: 'slide',
					type: 'object',
					fields: [
						{
							name:'youtube',
							type: 'youtube',
						},
					],
				},
			],
		}
	],
	preview: {
		prepare() {
			return {
				title: 'Slider YT Videos'
			}
		},
	}
}