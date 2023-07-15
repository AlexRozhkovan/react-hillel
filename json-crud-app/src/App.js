import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";
import Modal from "./Modal";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      editingPost: null,
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ posts: response.data });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  handleEditClick = (post) => {
    this.setState({
      editingPost: post,
    });
  };

  handleEditSave = async (editedPost) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${editedPost.id}`,
        editedPost
      );

      this.setState((prevState) => ({
        editingPost: null,
        posts: prevState.posts.map((post) =>
          post.id === editedPost.id ? editedPost : post
        ),
      }));
    } catch (error) {
      console.error("Error saving edited post:", error);
    }
  };

  handleDeleteClick = async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      this.setState((prevState) => ({
        posts: prevState.posts.filter((post) => post.id !== postId),
      }));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  render() {
    const { posts, editingPost } = this.state;

    return (
      <div className="App">
        <h1>Post List</h1>
        <PostList
          posts={posts}
          onEditClick={this.handleEditClick}
          onDeleteClick={this.handleDeleteClick}
        />
        {editingPost ? (
          <Modal
            post={editingPost}
            onSave={this.handleEditSave}
            onCancel={() => this.setState({ editingPost: null })}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
