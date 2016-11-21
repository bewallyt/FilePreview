import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
import 'babel-polyfill';
import 'fastclick';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import '../styles/main.css';
import App from './components/app';
import configureStore from './store/configureStore';


const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('main')
);


