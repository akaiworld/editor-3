import React, { Component } from 'react';

// this design
import PageContentDesign from './page-content-design.js';

import Blocks from '@/blocks/blocks.js';
import PageStore from '@/stores/page-store.js';

export default class PageContent extends Component {
	render() {
		const blocksData = PageStore.blocks();
		const blocks = blocksData.map(data => {
			const Component = Blocks.editorComponent(data.name);
			return <Component {...data}>;
		});
		return (
			<PageContentDesign
				components={{
					blocks,
				}}
				css={{

				}}
			/>
		);
	}
}