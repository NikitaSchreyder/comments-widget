import React, { Component } from 'react'
import './CommentsForm.css'

class CommentsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            commentText: ''
        }
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        const {sendComment} = this.props
        const {author, commentText} = this.state
        sendComment(author, commentText)
    }

    inputChangeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form className="comments-form" onSubmit={this.formSubmitHandler}>
                <input name="author" onChange={this.inputChangeHandler} className="comments-form_name-input" type="text" />
                <textarea name="commentText" onChange={this.inputChangeHandler} className="comments-form_comment-input" />
                <input className="comments-form_submit" type="submit" />
            </form>
        )
    }
    
}

export default CommentsForm;