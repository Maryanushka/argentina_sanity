// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import page from './documents/page'
import article from './documents/article'
import service from './documents/service'
import argentina from './documents/argentina'
import migration from './documents/migration'
import tourism from './documents/tourism'
import home from './documents/home'

// objects
// import projectList from './objects/projectList'

import block from './objects/block'
import youtube from './objects/youtube'
import contactForm from './objects/contactForm'
import metaTags from './objects/metaTags'
import sliderImage from './objects/sliderImage'
import sliderYoutube from './objects/sliderYoutube'
import imageText from './objects/imageText'
import intro from './objects/intro'
import benefits from './objects/benefits'

// items
import benefitItem from './objects/items/benefitItem'
import imageTextLink from './objects/items/imageTextLink'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		article,
		page,
		service,
		argentina,
		tourism,
		migration,
		home,

		block,
		imageTextLink,
		// serviceList,
		contactForm,
		youtube,
		metaTags,
		sliderImage,
		sliderYoutube,
		imageText,
		intro,
		benefits,

		// counterItem,
		// projectItem,
		// panelItem,
		// faqItem,
		benefitItem,
		
		// projectList,
		// homeintro,
		// gallery,
		// partners,
		// team,
		// countdown,
		// faq,
	]),
})
