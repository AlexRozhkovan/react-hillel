import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  render() {
    const { posts, onEditClick, onDeleteClick } = this.props;

    return (
      <div>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
