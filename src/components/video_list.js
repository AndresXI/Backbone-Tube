import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  // return (
  const vids = props.videoList.map((video) => {
    // <VideoList title={video.snippet.title}
    return <VideoListItem title={video.snippet.title} description={video.snippet.description} thumbnail={video.snippet.thumbnails.default.url} />;
  });

  console.log('my array: ', vids)

  return vids;


  // )
};

export default VideoList;