import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../src/components/styles/main.css';

import { onUpdate, forceUpdate, sendEvent } from './state';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const axios = require('axios');

const API_KEY = 'AIzaSyBQtEiqAheuxGrVsf0JJMPLSMzCUtVAJ1k';

class App extends Component {
  constructor(props) {
    super(props);
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
        // call add event and set data,
        sendEvent('setVideos', response.data.items);
      })
      .catch(error => {
        console.error('there was an error: ', error);
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.props.selected} />
        <VideoList videoList={this.props.videoList} />
      </div>
    );
  }
}

const root = document.querySelector('#root');

onUpdate((state) => {
  ReactDOM.render(
    <App videoList={state.videos} selected={state.selectedVideo} />,
    root
  );
});

forceUpdate();

