
import { MdAttachMoney } from "react-icons/md";

export default {
	title: 'Benefits',
	name: 'benefits',
	type: 'object',
	icon: MdAttachMoney,
	fields: [
		{
			name: "title",
			type: "string",
		},
		{
			name: 'benefitItems',
			type: 'array',
			title: 'benefit block',
			of: [
				{
					title: "benefit block",
					name: "benefitBlock",
					type: "benefitItem",
				},
			]
		}
	],
	preview: {
		select: {
			title: 'benefit.title',
		},
		prepare(selection) {
			return {
				title: 'Benefits'
			}
		},
		// component: MyPreviewComponent
	}
}