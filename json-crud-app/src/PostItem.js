import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./PostItem.css";

class PostItem extends Component {
  render() {
    const { post, onEditClick, onDeleteClick } = this.props;

    return (
      <div className="post">
        <div className="post-header">
          <h2 onClick={() => onEditClick(post)}>{post.title}</h2>
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => onDeleteClick(post.id)}
          />
        </div>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default PostItem;
