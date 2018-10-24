import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downloadImageURL } from './actions';
import Image from './Image';

class DisplayContainer extends Component {

    state = {
        error: {},
        imageURLs: ""
    };

    componentWillUpdate() {
        const { downloadImage, image } = this.props;
        downloadImage(image.name);
    }

    render() {
        const { imageURLs } = this.state;
        const { image } = this.props;
        return(
            <div>
                <Image url={imageURLs} altText={image.name}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        image: state.imageData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        downloadImage: imageName => dispatch(downloadImageURL(imageName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);