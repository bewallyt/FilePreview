import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {AddFileAction} from '../actions/addFileAction';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {isValidFileType} from '../utils/fileUtil';
import {isValidURL} from '../utils/urlUtil';
import * as types from '../constants/errorTypes';

const propTypes = {
	dispatch: PropTypes.func.isRequired
};

class AddFileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			url: '',
			type: '',
			size: '',
			error: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.state.name = this.state.url.substring(this.state.url.lastIndexOf('/') + 1);
		this.state.type = this.state.name.substring(this.state.name.lastIndexOf('.') + 1);

		if (!isValidURL(this.state.url)) {
			this.setState({error: types.URL_ERROR});
		}
		else if (!isValidFileType(this.state.type)) {
			this.setState({error: types.TYPE_ERROR});
		}
		else {
			let {dispatch} = this.props;
			dispatch(AddFileAction(this.state));
			this.setState({
				url: '',
				size: '',
				name: '',
				error: ''
			});
		}
	}

	handleChange(event) {
		switch (event.target.name) {
			case 'url':
				this.setState({url: event.target.value});
				return;
			case 'size':
				this.setState({size: event.target.value});
				return;
			default:
				return;
		}
	}

	render() {
		const style = {
			color: 'white',
			backgroundColor: 'white',
			display: 'flex',
			justifyContent: 'center'
		};
		return (
			<form onSubmit={this.handleSubmit}>
				<Toolbar style={style}>
					<ToolbarGroup firstChild={true}>
						<TextField name="url" hintText="File URL" value={this.state.url} errorText={this.state.error}
						           onChange={this.handleChange}/>
						<TextField type="number" name="size" placeholder="File Size (kb) - Optional" min="0" value={this.state.size}
						           onChange={this.handleChange}/>
						<ToolbarSeparator />
						<RaisedButton label="Add File" type="submit"/>
					</ToolbarGroup>
				</Toolbar>
			</form>
		)
	}
}

AddFileContainer.propTypes = propTypes;
export default connect()(AddFileContainer);
