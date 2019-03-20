import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  if (!props.videoList) {
    return <h1>no vids..</h1>;
  }

  const videoListArray = props.videoList.map((video, i) => {
    return <VideoListItem
      key={i}
      title={video.snippet.title}
      description={video.snippet.description}
      thumbnail={video.snippet.thumbnails.default.url} />;
  });

  return videoListArray;

};

export default VideoList;