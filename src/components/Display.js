import React from "react";

const DisplayImage = ({ url, altText }) => {
  return <img src={url} alt={altText} />;
};

export default DisplayImage;
