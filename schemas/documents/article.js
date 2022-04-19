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
		{
			name: 'tags',
			title: 'Tags',
			type: 'tags',
			options: {
				//Locks menu from creating new tags (defaults to false)
				frozen: true,
				//Preset of tags (defaults to empty)
				preload: [{label: "All", value: "all"}, {label: "Argentina", value: "argentina"}, {label: "Life", value: "life"}, {label: "Health", value: "health"}],
				//Closes menu after tag selected (defaults to true)
				closeMenuOnSelect: true
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
				{ type: 'titleText' },
				{ type: 'cta' },

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