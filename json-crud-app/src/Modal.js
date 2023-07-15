import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedPostTitle: this.props.post.title,
      editedPostBody: this.props.post.body,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ editedPostTitle: event.target.value });
  };

  handleBodyChange = (event) => {
    this.setState({ editedPostBody: event.target.value });
  };

  handleSave = () => {
    const { post, onSave } = this.props;
    const { editedPostTitle, editedPostBody } = this.state;

    onSave({ ...post, title: editedPostTitle, body: editedPostBody });
  };

  render() {
    const { onCancel } = this.props;
    const { editedPostTitle, editedPostBody } = this.state;

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Editor</h2>
            <FontAwesomeIcon icon={faTimes} onClick={onCancel} />
          </div>
          <input
            type="text"
            value={editedPostTitle}
            onChange={this.handleTitleChange}
          />
          <textarea value={editedPostBody} onChange={this.handleBodyChange} />
          <div className="modal-footer">
            <button onClick={this.handleSave}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
