import { fb_storage } from "../../config/firebase";

const imageUploadBegin = () => {
  return {
    type: "IMAGE_UPLOAD_BEGIN",
    message: "Starting image reteval"
  };
};

const imageUploadSuccess = imgMetaData => {
  return {
    type: "IMAGE_UPLOAD_SUCCESS",
    message: "Image uploaded, successfully :)",
    imgMetaData
  };
};

const imageUploadError = err => {
  return {
    type: "IMAGE_UPLOAD_ERR",
    message: "Uh-oh something happened...",
    err
  };
};

export const imageUpload = fileToUpload => {
  return dispatch => {
    dispatch(imageUploadBegin());
    fb_storage
      .ref()
      .child("images/" + fileToUpload.name)
      .put(fileToUpload)
      .then(snap => {
        console.log(snap)
        // dispatch(imageUploadSuccess(snap))
      })
      .catch(err => dispatch(imageUploadError(err)));
  };
};
