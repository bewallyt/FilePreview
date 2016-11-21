import React, {Component, PropTypes} from 'react';
import ToolTip from 'react-portal-tooltip';
import {connect} from 'react-redux';
import {previewFileAction} from '../actions/previewFileAction';

const propTypes = {
	file: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired
};

class ImagePreviewContainer extends Component {
	state = {
		isTooltipActive: false
	};

	showTooltip() {
		this.setState({isTooltipActive: true})
	}

	hideTooltip() {
		this.setState({isTooltipActive: false})
	}

	handleClick() {
		const {file} = this.props;
		let {dispatch} = this.props;
		dispatch(previewFileAction(file.url));
	}

	render() {
		const {file, index} = this.props;
		return (
			<div>
				<div id={"f"+file.name.split('.')[0] + index} className="preview overlap" onClick={() => this.handleClick()}>
					<p id="text" className="text-content">Click to Enlarge Preview</p>
					<img
						className="image"
						onMouseEnter={() => this.showTooltip()}
						onMouseLeave={() => this.hideTooltip()}
						src={"./imgs/" + file.type + "-icon.png"}
						role="presentation"/>
				</div>
				<ToolTip
					tooltipTimeout={150}
					active={this.state.isTooltipActive}
					position="right"
					arrow="center"
					parent={"#f"+file.name.split('.')[0] + index}>
					<img className="scale-image" src={file.url}
					role="presentation"/>
				</ToolTip>
			</div>
		)
	}
}

ImagePreviewContainer.propTypes = propTypes;
export default connect()(ImagePreviewContainer);