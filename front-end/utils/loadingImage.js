const loadingImage = (image) => {
  if (!image) {
    return "https://via.placeholder.com/200/262b2f?text=%20";
  }
  return image;
};

export default loadingImage;
