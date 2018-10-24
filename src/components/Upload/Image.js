import React from "react";

const UploadImage = ({ submitting, uploading }) => {
  return (
    <form onSubmit={submitting}>
      <h1>Upload Photo</h1>
      <input type="file" onChange={uploading} />
      <button>Upload</button>
    </form>
  );
};

export default UploadImage;
