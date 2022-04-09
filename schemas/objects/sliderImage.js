import { SiSlides } from "react-icons/si";

SiSlides
export default{
	name: 'sliderImage',
	title: 'Slider Image',
	type: 'object',
	icon: SiSlides,
	fields: [
		{
			name: 'list',
			type: 'array',
			of: [
				{
					name: 'slide',
					type: 'object',
					fields: [
						{
							name: 'imageItem',
							type: 'array',
							title: 'Image Item',
							of: [
								{
									name: 'desktop',
									type: 'image',
								},
								{
									name: 'mobile',
									type: 'image',
								},
							]
						},
					],
				},
			],
		}
	],
	preview: {
		prepare() {
			return {
				title: 'Slider of Images'
			}
		},
	}
}