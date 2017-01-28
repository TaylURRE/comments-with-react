var React = require('react');
  var ReactDOM = require('react-dom');

  class CommentBox extends React.Component {

    render() {
      const comments = this._getComments() || [];
      return(
        <div className="comment-box">
          <h3>Comments</h3>
          <h4 className="comment-count"></h4>
          <div className="comment-list">
            {comments}
          </div>
        </div>
      );
    }

    _getComments() {

      const commentList = [
        { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl: 'http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png' },
        { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png' }
      ];

      return commentList.map((comment) => {
        return (<Comment
                 author={comment.author}
                 body={comment.body}
                 avatarUrl={comment.avatarUrl}
                 key={comment.id} />);
      });
    }
  }

  class Comment extends React.Component {
    render() {
      return(
        <div className="comment">

          <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />

          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">
            {this.props.body}
          </p>
          <div className="comment-actions">
            <a href="#">Delete comment</a>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<CommentBox />, document.getElementById('app'))
