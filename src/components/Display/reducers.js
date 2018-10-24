export const imageData = (state = "", action) => {
  switch (action.type) {
    case "DOWNLOADING_IMAGE_BEGIN":
      return action.message;
    case "DOWNLOADED_IMAGE_SUCCESS":
      return {
        message: action.message, 
        imgData: action.imgData
      }
    case "DOWNLOADED_IMAGE_ERROR":
      return {
        message: action.message,
        err: { ...action.err }
      };
    default:
      return state;
  }
};
