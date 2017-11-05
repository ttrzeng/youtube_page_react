import React from 'react';
import ReactDOM from 'react-dom';

//API Key from Youtube
const API_KEY = 'AIzaSyBgRf8J6zTHJsyF1LbbMtu42eJBH3krlqU';

//Create a new component, this will be used to creat some HTML
const App = () => {
	return <div>Hello World!</div>;
}

//Take this component and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
