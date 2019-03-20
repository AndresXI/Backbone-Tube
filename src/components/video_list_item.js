import React from 'react';

const VideoListItem = props => {

  return (
    <li>
      <h1>{props.title}</h1>
      <img src={props.thumbnail} alt="youtube thumbnail" />
      <p><em>{props.description}</em></p>
    </li>
  );
};

export default VideoListItem;