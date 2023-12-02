import React from 'react'
import './PostItem.css'
import { Link } from 'react-router-dom'

const PostItem = ({post}) => {
    return (
    <div className='post-container'>
        <Link to={`/p/${post.id}`}>
            <h2 className='post-title'>{post.title}</h2>
        </Link>
        <p>
            <span>{post.author}</span> | <span className='post-author'>{post.createdAt}</span>
        </p>
        <p>
            {post.commentCount} {post.commentCount > 0 ? "Comments" : "Comment"}
        </p>
    </div>
  )
}

export default PostItem