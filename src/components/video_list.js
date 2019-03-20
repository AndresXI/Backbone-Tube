import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  // return (
  if (!props.videoList) {
    return <h1>no vids..</h1>;
  }

  const vids = props.videoList.map((video) => {
    // <VideoList title={video.snippet.title}
    return <VideoListItem title={video.snippet.title} description={video.snippet.description} thumbnail={video.snippet.thumbnails.default.url} />;
  });

  return vids;

};

export default VideoList;