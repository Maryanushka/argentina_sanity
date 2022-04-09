export default 	{
	title: 'Block Content',
	name: 'blockContent',
	type: 'block',
	styles: [
		{ title: 'Normal', value: 'normal' },
		{ title: 'Content title h4', value: 'h4' },
		{ title: 'Content title h5', value: 'h5' },
		{ title: 'Content title h6', value: 'h6' },
	],
	lists: [
		{ title: 'Bullet', value: 'bullet' },
	],
	marks: {
		decorators: [
			{ title: 'Strong', value: 'strong' },
		],
		annotations: [
			{
				title: 'URL',
				name: 'link',
				type: 'object',
				fields: [
					{
						title: 'URL',
						name: 'href',
						type: 'url',
					},
				],
			},
		],
	},
}