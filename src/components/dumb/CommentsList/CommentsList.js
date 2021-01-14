import React from 'react'
import Comment from '../Comment/Comment'

const CommentsList = ({commentsList, deleteComment, generateCommentKey}) => {
  const commentElement = comment => <Comment key={generateCommentKey} comment={comment} deleteComment={deleteComment}/>
  const comments = commentsList.map(comment => commentElement(comment))
  return (
    <React.Fragment>
      {
        [...comments]
      }
    </React.Fragment>
  )
}

export default CommentsList;