import React from 'react'
import './Comment.css'

const Comment = ({comment, deleteComment}) => {
  const {id, author, commentText, sendDate} = comment
  const deleteCommentHandler = () => {
    deleteComment(id)
  }
  return (
    <div className='comment'>
      <p className='comment-author'>{author}</p>
      <p className='comment-text'>{commentText}</p>
      <div className='comment-info'>
        <button className='comment_delete-button' onClick={deleteCommentHandler}></button>
        <p className='comment-date'>{sendDate}</p>
      </div>
    </div>
  )
}

export default Comment;