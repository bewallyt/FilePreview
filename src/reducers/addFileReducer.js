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
		url: '/example_files/readme_example.txt',
		size: '2',
		name: 'Readme',
		type: 'txt'
	},
	{
		url: '/example_files/example_handles.mp4',
		size: '34000',
		name: 'NBA_Handles',
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
	},
	{
		url: 'https://s-media-cache-ak0.pinimg.com/originals/d0/46/c3/d046c32c4b400a7ee73eb8b5e2d2ee71.png',
		size: '3000',
		name: 'Mario',
		type: 'png'
	},
	{
		url: '/example_files/example_package.json',
		size: '500',
		name: 'Package',
		type: 'json'
	},
	{
		url: '/example_files/example_stronger.mp3',
		size: '4000',
		name: 'Stronger',
		type: 'json'
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
