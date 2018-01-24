import Components from '@/page-components/page-components.js';

export default class ComponentData {
	constructor(props) {
		this.data = props.data;
		this.mode = props.mode; // editor || real
	}
	get(name) {
		return !name ? null : 
			this.data[name] ? this.data[name] :
			null;
	}
	child(name, data) {
		if(!name){
			return null;
		}
		const Component = 
			this.mode == 'editor' ? Components.editorComponent(name) : 
			this.mode == 'editor' ? Components.realComponent(name) : 
			null;
		return <Component data={data} mode={this.mode} />
	}
}