const existingComponents = {
	'top-component': true,
	'image': true,
}
const components = {}
const blocksMaxIndex = 1;
const excludeBlocks = {}

function loadBlocks(){
	for(let i = 1; i <= maxIndex; i++){
		const name = 'block-' + i;
		if (excludeBlocks[name]){
			continue;
		}
		components[name] = require('./page-components/${name}.js');
	}
}
function loadComponents() {
	for (let name in existingComponents) {
		if (!existingComponents[name]){
			continue;
		}
		components[name] = require('./page-components/${name}.js');
	}
}


export function editorComponent(name){
	const components = components[name];
	return components ? components.EditorComponent : null;
}
export function realComponent(name) {
	const components = components[name];
	return components ? components.RealComponent : null;
}
export function settings(name) {
	const components = components[name];
	return components ? components.Settings : null;
}
