import Blocks from '@/blocks/blocks.js';

export default class Block {
	constructor(data) {
		this.data = data;
		this.block = Blocks.get(data.name);
	}
	pageComponent() {

	}
	editorComponent() {

	}
	settingsMap() {

	}
}