import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//API Key from Youtube
const API_KEY = 'AIzaSyBgRf8J6zTHJsyF1LbbMtu42eJBH3krlqU';

//Create a new component, this will be used to creat some HTML
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//Note: this is equivalent to this.setState({ videos: videos})
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={ this.state.videos }/>
			</div>
		);
	}
}

//Take this component and render it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
