import * as React from 'react';

import './Avatar.scss';

export interface IAvatarProps {
  imageUrl: string;
}

const Avatar = ({ imageUrl }: IAvatarProps) => {
  return (
    <div className="avatar">
      {
        imageUrl
          ? <img className="avatar--image" src={imageUrl} />
          : <i className="fab fa-grunt avatar--icon" />
      }
    </div>
  )
}

export default Avatar;