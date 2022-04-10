export default {
	name: 'imageTextLink',
	title: "Button link",
	type: 'object',
	fields: [
		{
			title: 'Button link',
			name: 'href',
			type: 'url',
			validation: Rule => Rule.uri({
				scheme: ['http', 'https', 'mailto', 'tel']
			})
		},
		{
			title: "Button name",
			name: "name",
			type: "string",
		},
	]
}