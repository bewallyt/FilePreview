import * as types from '../constants/actionTypes';
import deepFreeze from 'deep-freeze';

export default function previewFileReducer(state = {}, action) {
	deepFreeze(state);

	switch (action.type) {
		case types.PREVIEW_FILE:
			return action;
		default:
			return state;
	}
}
