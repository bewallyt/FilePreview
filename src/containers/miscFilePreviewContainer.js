 /* eslint-disable */ 
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {previewFileAction} from '../actions/previewFileAction';

const propTypes = {
	file: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};

class miscFilePreviewContainer extends Component {
	state = {
		hoverText: 'No Preview Available'
	};

	handleClick() {
		if (this.state.hoverText !== 'Click to Enlarge Preview') return;
		const {file} = this.props;
		let {dispatch} = this.props;
		dispatch(previewFileAction(file.url));
	}

	generateImageSource(fileType) {
		const popTypes = ['pdf'];
		if (popTypes.indexOf(fileType) !== -1) {
			this.state.hoverText = 'Click to Enlarge Preview';
			return "./imgs/" + fileType + "-icon.png";
		}
		return "./imgs/file-icon.png"
	}

	setViewableState(fileType) {
		const viewableTypes = ['pdf', 'txt', 'json', 'gifx', 'php', 'java', 'mov', 'mp4', 'avi'];
		if (viewableTypes.indexOf(fileType) !== -1) {
			this.state.hoverText = 'Click to Enlarge Preview';
		}
	}

	render() {
		const {file, index} = this.props;
		const imageSource = this.generateImageSource(file.type);
		this.setViewableState(file.type);
		return (
			<div>
				<div id={"f"+file.name.split('.')[0] + index} className="preview overlap" onClick={() => this.handleClick()}>
					<p id="text" className="text-content">{this.state.hoverText}</p>
					<img
						className="image"
						src={imageSource}/>
				</div>
			</div>
		)
	}
}

miscFilePreviewContainer.propTypes = propTypes;
export default connect()(miscFilePreviewContainer);