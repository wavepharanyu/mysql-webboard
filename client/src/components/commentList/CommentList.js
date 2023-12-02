import React from 'react'
import './CommentList.css'
const CommentList = ({comments}) => {
  return (
    <div className='comments-container'>
        <h2>{comments.length} Comments</h2>
        {comments.map((comment) => {
            return(
                <div className='comment-container'>
                    <span className='comment-author'>{comment.author} | {comment.createdAt}</span>
                    <p>{comment.content}</p>
                </div>
            )
        })}

    </div>
  )
}

export default CommentList