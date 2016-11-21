import * as types from '../constants/actionTypes';
import deepFreeze from 'deep-freeze';

const initialState = [
	{
		url: 'https://s-media-cache-ak0.pinimg.com/originals/2d/23/50/2d235036229e5bfcec2380be4ab9321f.jpg',
		size: '5000',
		name: 'Big_Baby',
		type: 'jpeg'
	},
	{
		url: 'http://i.imgur.com/yDD0LCR.jpg',
		size: '3000',
		name: 'Dumplings',
		type: 'jpg'
	},
	{
		url: 'https://media.giphy.com/media/yDTWAecZcB2Jq/giphy.gif',
		size: '8000',
		name: 'Here_Come_Dat_Boi',
		type: 'gif'
	},
	{
		url: 'https://info.wealthfront.com/rs/781-RJU-318/images/WF-2017-CareerGuide.pdf',
		size: '9000',
		name: 'Wealthfront_Careers',
		type: 'pdf'
	},
	{
		url: 'http://www.sample-videos.com/csv/Sample-Spreadsheet-100-rows.csv',
		size: '11',
		name: 'Random_CSV',
		type: 'csv'
	},
	{
		url: 'http://www.textfiles.com/drugs/acidinf.txt',
		size: '2',
		name: 'Acid',
		type: 'txt'
	},
	{
		url: 'http://techslides.com/demos/sample-videos/small.mp4',
		size: '10000',
		name: 'Random_Video',
		type: 'mp4'
	},
	{
		url: 'http://i.imgur.com/ogRHRKu.gif',
		size: '6400',
		name: 'Cat',
		type: 'gif'
	},
	{
		url: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/160927210830-tk-ah0927-exlarge-169.jpg',
		size: '5000',
		name: 'Pepe',
		type: 'jpg'
	},
	{
		url: 'https://s-media-cache-ak0.pinimg.com/originals/d0/46/c3/d046c32c4b400a7ee73eb8b5e2d2ee71.png',
		size: '3000',
		name: 'Mario',
		type: 'png'
	}
];

export default function addFileReducer(state = initialState, action) {
	deepFreeze(state);

	switch (action.type) {
		case types.ADD_FILE:
			return [...state, action.file];
		default:
			return state;
	}
}
