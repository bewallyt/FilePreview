import React, {Component, PropTypes} from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import GetApp from '../../node_modules/material-ui/svg-icons/action/get-app';
import {downloadFile} from '../utils/fileUtil';
import ImagePreviewContainer from './../containers/imagePreviewContainer';
import MiscFilePreviewContainer from './../containers/miscFilePreviewContainer';


const propTypes = {
	file: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};

class FileTile extends Component {
	renderContent(file, index) {
		switch (file.type) {
			case 'gif':
			case 'png':
			case 'jpeg':
			case 'jpg':
				return (<ImagePreviewContainer file={file} index={index} key={index}/>);
			default:
				return (<MiscFilePreviewContainer file={file} index={index} key={index}/>);
		}
	}

	render() {
		const {file, index} = this.props;
		const styles = {
			titleBackground: 'rgb(0, 188, 212)'
		};
		return (
			<GridTile
				title={file.name}
				subtitle={<span>{file.type} - {file.size} kb</span>}
				actionIcon={<IconButton onClick={() => {downloadFile(file)}}><GetApp color="white"/></IconButton>}
				className="overlap animated zoomIn"
				containerElement={<Paper zDepth={1}/>}
				titleBackground={styles.titleBackground}>
				{this.renderContent(file, index)}
			</GridTile>
		)
	}
}

FileTile.propTypes = propTypes;
export default FileTile;