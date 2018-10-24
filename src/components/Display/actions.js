import { storage } from "../../config/firebase";

const downloadImageBegin = () => {
    return {
        type: "DOWNLOADING_IMAGE_BEGIN",
        message: "Downloading image..."
    }
}

const downloadImageSuccess = imgData => {
    return {
        type: "DOWNLOADED_IMAGE_SUCCESS",
        message: "Image URL has now been downloaded",
        imgData
    }
}

const downloadImageError = err => {
    return {
        type: "DOWNLOADED_IMAGE_ERROR",
        message: "Oh-no, couldn't download...",
        err
    }
}

export const downloadImageURL = imageName => {
    return dispatch => {
        dispatch(downloadImageBegin())
        storage
        .ref()
        .child("images/" + imageName)
        .getDownloadURL()
        .then(url => dispatch(downloadImageSuccess(url)))
        .catch(err => dispatch(downloadImageError(err)))
    }
}