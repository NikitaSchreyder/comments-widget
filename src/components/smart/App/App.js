import React, { Component } from 'react';
import './App.css';
import CommentsForm from '../CommentsForm/CommentsForm';
import CommentsList from '../../dumb/CommentsList/CommentsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsList: []
    }
  }
  
  componentDidMount() {
    return(
      JSON.parse(localStorage.getItem('commentsList')) !== null
      ? this.setState({
        commentsList: JSON.parse(localStorage.getItem('commentsList')) 
      })
      : null
    )
  }

  setLocalStorageComments(commentsList) {
    localStorage.setItem('commentsList', JSON.stringify(commentsList));
  }
  
  deleteComment = (id) => {
    const comments = this.state.commentsList.filter(comment => comment.id !== id);
    this.setState({commentsList: comments}, this.setLocalStorageComments(comments));
  }

  generateCommentId = author => author + Date.now() * Math.random();
  generateCommentKey = () => 'comment' + Date.now() * Math.random();

  sendComment = (author, commentText) => {
    const {commentsList} = this.state;
    const updatedCommentsList = [
      {
        id: this.generateCommentId(author),
        author: author ,
        commentText: commentText,
        sendDate: new Date().toLocaleString()
      },
      ...commentsList
    ]
    this.setState({commentsList: updatedCommentsList}, this.setLocalStorageComments(updatedCommentsList));
  }

  render() {
    return (
      <div className="App">
        <CommentsForm 
          sendComment={this.sendComment}/>
        <CommentsList 
          commentsList={this.state.commentsList}
          deleteComment={this.deleteComment}
          generateCommentKey={this.generateCommentKey}/>
      </div>
    );
  }
}

export default App