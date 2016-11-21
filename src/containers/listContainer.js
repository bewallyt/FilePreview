import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {GridList} from 'material-ui/GridList';
import FileTile from '../components/fileTile';

const propTypes = {
	files: PropTypes.array.isRequired
};


class ListContainer extends Component {
	render() {
		const {files} = this.props;
		const styles = {
			root: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around'
			},
			gridList: {
				width: '78%',
				height: '160%',
				overflowY: 'auto'
			}
		};
		return (
			<div style={styles.root}>
				<GridList cols={6} cellHeight={200} padding={15} style={styles.gridList}>
					{files.map((file, index) => (
						<FileTile file={file} index={index} key={index}/>
					))}
				</GridList>
			</div>
		)
	}

}

ListContainer.propTypes = propTypes;

function mapStateToProps(state) {
	const {addFileReducer} = state;
	const files = addFileReducer;
	return {files};
}

export default connect(mapStateToProps)(ListContainer);