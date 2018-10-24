export const imageUploadData = (state = "", action) => {
    switch (action.type) {
        case "IMAGE_UPLOAD_BEGIN":
            return action.message;
        case "IMAGE_UPLOAD_SUCCESS":
            return action.message
        case "IMAGE_UPLOAD_ERR":
            return {
                message: action.message,
                err: { ...action.err }
            };
        default:
            return state;
    }
};