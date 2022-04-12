export default{
	name: 'serviceList',
	type: 'object',
	title: 'Service list',
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			name: 'list',
			type: 'array',
			title: 'service Item',
			of: [
				{
					type: 'page',
				}
			]
		}
	],
	preview: {
		select: {
			title: 'panelItem.title',
		},
		prepare(selection) {
			return {
				title: 'Slider panels'
			}
		},
		// component: MyPreviewComponent
	}
}