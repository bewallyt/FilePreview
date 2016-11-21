 /* eslint-disable */ 
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import SkyLight from 'react-skylight';
import $ from 'jquery';

const propTypes = {
	preview: PropTypes.object
};

class PreviewFileContainer extends Component {
	componentWillUpdate() {
		const {preview} = this.props;
		if (preview.url !== '') {
			this.refs.dialog.show();
		}
	}

	render() {
		const {preview} = this.props;
		const textFiles = ['pdf', 'txt', 'json', 'gifx', 'php', 'java', 'mp4', 'avi', 'mov'];
		let dialogSize = {
			height: 'auto',
			width: 'auto',
			overflow: 'scroll',
			maxHeight: '92vh',
			maxWidth: '92vh',
			marginTop: '-48vh',
			zIndex: Number.MAX_SAFE_INTEGER
		};
		let objectHeight = '';
		let objectWidth = '';
		if (!$.isEmptyObject(preview) && textFiles.indexOf(preview.url.substring(preview.url.lastIndexOf('.') + 1)) !== -1) {
			objectHeight = '850px';
			objectWidth = '650px';
		}
		return (
			<SkyLight hideOnOverlayClicked ref="dialog" dialogStyles={dialogSize}>
				<div className="center">
					<object data={preview.url} height={objectHeight} width={objectWidth}/>
				</div>
			</SkyLight>
		)
	}
}

PreviewFileContainer.propTypes = propTypes;

function mapStateToProps(state) {
	const {previewFileReducer} = state;
	const preview = previewFileReducer;
	return {preview};
}

export default connect(mapStateToProps)(PreviewFileContainer);