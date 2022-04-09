import { BsTree } from "react-icons/bs";
import SlugInput from 'sanity-plugin-better-slug'

export default {
	title: "Tourism",
	name: "tourism",
	type: "document",
	icon: BsTree,
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
				basePath: 'tourism',
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
	]
}