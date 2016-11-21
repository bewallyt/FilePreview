import * as types from '../constants/actionTypes';

export function AddFileAction(file) {
	return {
		type: types.ADD_FILE,
		file: {
			type: file.type,
			url: file.url,
			size: file.size,
			name: file.name
		}
	};
}
