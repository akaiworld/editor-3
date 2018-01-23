import React, { Component } from 'react';

export default class EditorUIDesign extends Component {
	render() {
		const p = this.props;

		return (
			<div>
				<div className={'flex-row '+p.css.appState}>
					<div className="flex-col">
						{p.editorControls}
						{p.pageContent}
					</div>
					<div className="flex-col">
						{p.settingsNavigator}
						{p.settingsPanel}
					</div>
				</div>
			</div>
		);
	}
}