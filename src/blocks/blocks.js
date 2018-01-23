const blocks = {}
const maxIndex = 1;

function loadBlocks(){
	for(let i = 1; i <= maxIndex; i++){
		const name = 'block-' + i;
		blocks[name] = require('./blocks-components/${name}.js');
	}
}
export function editorComponent(name){
	const block = blocks[name];
	return block ? block.EditorComponent : null;
}
export function pageComponent(name) {
	const block = blocks[name];
	return block ? block.PageComponent : null;
}
export function settings(name) {
	const block = blocks[name];
	return block ? block.Settings : null;
}
export function get(name){
	return blocks[name] || null;
}
