import S from '@sanity/desk-tool/structure-builder'
import * as Structure from '@sanity/document-internationalization/lib/structure'
import { MdDehaze } from "react-icons/md";


export const getDefaultDocumentNode = (props) => {
	// if (props.schemaType === 'navbar') return S.document();
	return S.document().views(Structure.getDocumentNodeViewsForSchemaType(props.schemaType));
};


export default () => {
	const items = Structure.getFilteredDocumentTypeListItems().filter(listItem =>
		!['media.tag'].includes(listItem.id)
	)

	return S.list()
		.title('Content')
		.items([
			...items
		])
}
