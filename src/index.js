import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../src/components/styles/main.css';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const axios = require('axios');

const API_KEY = 'AIzaSyBQtEiqAheuxGrVsf0JJMPLSMzCUtVAJ1k';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };

    axios
      .get(url, { params: params })
      .then(response => {
        console.log(response);
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });

      })
      .catch(error => {
        console.error('there was an error: ', error);
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videoList={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));