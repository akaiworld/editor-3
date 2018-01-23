import React, { Component } from 'react';

// this design
import EditorDesign from './editor-design.js';

// other components
import EditorControls from '@/app-ui/editor-controls/editor-controls.js';
import PageContent from '@/app-ui/page-content/page-content.js';
import SettingsNavigator from '@/app-ui/settings-navigator/settings-navigator.js';
import SettingsPanel from '@/app-ui/settings-panel/settings-panel.js';

// store
import UIStore from '@/stores/ui-store.js';


class App extends Component {
	render() {
		return (
			<EditorDesign
				components={{
					editorControls: <EditorControls />,
					pageContent: <PageContent />,
					settingsNavigator: <SettingsNavigator />,
					settingsPanel: <SettingsPanel />,
					// searchPanel: <SearchPanel />,
				}}
				css={{
					appState: UIStore.uiState(),
				}}
			/>
		);
	}
}

export default App;