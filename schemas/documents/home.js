import { BiHomeAlt } from "react-icons/bi";

import SlugInput from 'sanity-plugin-better-slug'

export default {
	title: "Home",
	name: "home",
	type: "document",
	icon: BiHomeAlt,
	i18n: true,
	groups: [
		{
			name: 'metaTags',
			title: 'Meta Tags',
		},
	],
	fields: [
		{// title
			name: "title",
			type: "string",
			description: 'also used as link label',
			validation: Rule => Rule.required(),
		},
		{// uid
			name: "uid",
			title: "UID",
			type: "slug",
			inputComponent: SlugInput,
			options: {
				source: 'title',
				basePath: '/',
				slugify: (slugString) => slugString.toLowerCase().replace(/\s+/g, '-'),
			}
		},
		{// poster
			name: "poster",
			title: "Poster",
			type: "image",
		},
		{// content
			name: 'content',
			type: 'array',
			of: [
				{ type: 'sliderImage' },
				{ type: 'sliderYoutube' },
				{ type: 'benefits' },
				{ type: 'imageText' },
			]
		},
		{// MetaTags
			name: 'metaTags',
			type: 'metaTags',
			group: 'metaTags'
		}
	],
	preview: {
		select: {
			title: 'title',
			media: 'poster',
		},
		prepare({ title, media }) {
			return {
				title: `${ title }`,
				media,
			};
		},
	},

}