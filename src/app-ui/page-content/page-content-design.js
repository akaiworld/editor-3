import React, { Component } from 'react';

export default class EditorControlsDesign extends Component {
	render() {
		const {blocks} = this.props;
		return (
			<div>
				{blocks}
			</div>
		);
	}
}