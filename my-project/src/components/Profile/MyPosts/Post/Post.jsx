import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;