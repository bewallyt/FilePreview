import React, {Component, PropTypes} from 'react';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import AddFileContainer from '../containers/addFileContainer';
import ListContainer from '../containers/listContainer';
import PreviewFileContainer from '../containers/previewFileContainer';


class App extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<PreviewFileContainer/>
					<AddFileContainer/>
					<br/><br/>
					<ListContainer/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;