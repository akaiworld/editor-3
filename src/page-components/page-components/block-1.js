const settings = exports.Settings = [

];


export class EditorComponent extends Mixins(EditorComponent, Component) {
	render() {
		const bgColor = this.get('background-color');
		const childComponent = this.child('image');
		return (
			<Editor />
		);
	}
}