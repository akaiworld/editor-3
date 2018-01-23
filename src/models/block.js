import React from 'react';

import '@/blocks/blocks.js';

export default class Block {
	constructor(data) {
		this.data = data;

		const {
			PageComponent, 
			EditorComponent, 
			Settings,
		} = Blocks.get(data.name);

		this.pageComponent = PageComponent;
		this.editorComponent = EditorComponent;
		this.settings = Settings;
	}
	// real page block component
	pageComponent(...props){
		if(this.pageComponentJSX){
			return this.pageComponentJSX;
		}
		const PageComponent = this.pageComponent;
		this.pageComponentJSX = <PageComponent 

			{...props}
		/>;

		return this.pageComponentJSX;
	}
	// editor block component
	editorComponent() {
		return this.EditorComponent;
	}
	// map of settings
	settingsMap() {
		return this.Settings;
	}
}