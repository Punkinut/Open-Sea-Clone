import React from "react";
import styles from "./styles";
import loadingImage from "../../../utils/loadingImage";

function CollectionBanner({ image }) {
  return (
    <div className={styles.bannerImageContainer}>
      <img
        className={styles.bannerImage}
        src={loadingImage(image)}
        alt="banner"
      />
    </div>
  );
}

export default CollectionBanner;
