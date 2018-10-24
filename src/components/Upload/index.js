import React, { Component } from "react";
import { connect } from "react-redux";
import Image from "./Image";
import { imageUpload } from "./actions";

class UploadContainer extends Component {
  state = {
    image: {}
  };

  files = e => {
    const { upload } = this.props;
    upload(e.target.files[0]);
  };

  // submit = e => {
  //   const { image } = this.state;
  //   e.preventDefault();
  //   storage
  //     .ref()
  //     .child("images/" + image.name)
  //     .put(image)
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Image uploading={this.files} submitting={this.submit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    upload: file => dispatch(imageUpload(file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadContainer);
