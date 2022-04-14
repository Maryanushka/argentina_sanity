import { GiNewspaper } from "react-icons/gi";
import SlugInput from 'sanity-plugin-better-slug'

export default {
	title: "Article",
	name: "article",
	type: "document",
	icon: GiNewspaper,
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
				basePath: 'argentina/article',
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
				{ type: 'imageText' },
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