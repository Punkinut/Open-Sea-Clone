import React from "react";
import loadingImage from "../../../utils/loadingImage";
import styles from "./styles";

function CollectionProfileImage({ image }) {
  return (
    <div className={styles.midRow}>
      <img
        className={styles.profileImg}
        src={loadingImage(image)}
        alt="profile image"
      />
    </div>
  );
}

export default CollectionProfileImage;
