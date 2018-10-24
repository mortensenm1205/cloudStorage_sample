import { storage } from "../../config/firebase";

const imageUploadBegin = () => {
  return {
    type: "IMAGE_UPLOAD_BEGIN",
    message: "Starting image reteval"
  };
};

const imageUploadSuccess = () => {
  return {
    type: "IMAGE_UPLOAD_SUCCESS",
    message: "Image uploaded, successfully :)"
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
    storage
      .ref()
      .child("images/" + fileToUpload.name)
      .put(fileToUpload)
      .then(() => dispatch(imageUploadSuccess))
      .catch(err => dispatch(imageUploadError(err)));
  };
};
