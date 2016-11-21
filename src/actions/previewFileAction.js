import * as types from '../constants/actionTypes';

export function previewFileAction(fileUrl) {
	return {
		type: types.PREVIEW_FILE,
		url: fileUrl,
	};
}
