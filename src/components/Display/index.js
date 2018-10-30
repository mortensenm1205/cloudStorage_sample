import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downloadImageURL } from './actions';
import DisplayImage from './Image';

class DisplayContainer extends Component {

    state = {
        error: {},
        imageURLs: ""
    };

    componentDidMount() {
        const { downloadImage, image } = this.props;
        console.log(image);
    }

    render() {
        const { imageURLs } = this.state;
        const { image } = this.props;
        return(
            <div>
                <DisplayImage url={imageURLs} altText={image.name}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        image: state.imageUploadData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        downloadImage: imageName => dispatch(downloadImageURL(imageName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);