import { GiWalk } from "react-icons/gi";
import SlugInput from 'sanity-plugin-better-slug'

export default {
	title: "Migration",
	name: "migration",
	type: "document",
	icon: GiWalk,
	i18n: true,
	groups: [
		{
			name: 'metaTags',
			title: 'Meta Tags',
		},
	],
	fields: [
		{// title
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{// uid
			name: "uid",
			title: "UID",
			type: "slug",
			inputComponent: SlugInput,
			options: {
				source: 'title',
				basePath: 'migration',
				slugify: input => input.toLowerCase().replace(/\s+/g, '-'),
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
				{ type: 'benefits' },
				{ type: 'imageText' },
				{ type: 'cta' },
				{ type: 'titleText' },
			]
		},
		{// description
			name: "description",
			type: "text",
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
			lang: '__i18n_lang',
		},
		prepare({ title, lang,  media }) {
			return {
				title: `${title}`,
				subtitle: lang,
				media,
			};
		},
	},
}