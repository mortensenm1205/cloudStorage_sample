import React, { Component } from "react";
import Upload from "../components/Upload";
import Display from "../components/Display";

class Root extends Component {
  state = {
    image: {},
    error: {},
    imageURLs: ""
  };

  componentWillUpdate() {
    const { image } = this.state;
    storage
      .ref()
      .child("images/" + image.name)
      .getDownloadURL()
      .then(url => this.setState({ imageURLs: url }))
      .catch(err => this.setState({ error: err }));
  }

  render() {
    const { image, imageURLs } = this.state;
    return (
      <div>
        <Upload />
        <Display url={imageURLs} altText={image.name} />
      </div>
    );
  }
}

export default Root;
