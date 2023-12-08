import React from 'react'
import imgi from '../pages/imgi.jpg'

const Post = ({post}) => {
  console.log(post);
  return (
    <div className="post">
        <div className="image">
            <img src={imgi} alt="none" />
        </div>
        <div className='details'>
            <div className="title"><h1>{post.title}</h1></div>
            <div className='Date'> Created - {post.createdAt}</div>
            <div className="summery">{post.content.substring(0, 700)+"....."}</div>
        </div>
    </div>
  )
}

export default Post
