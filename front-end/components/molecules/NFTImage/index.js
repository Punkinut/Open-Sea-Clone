import React from "react";
import styles from "./styles";
import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

function NFTImage({ selectedNft }) {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <IoMdSnow />
          <div className={styles.likesCounter}>
            <AiOutlineHeart />
            2.3K
          </div>
        </div>
      </div>
      <div>
        <img src={selectedNft?.image} />
      </div>
    </div>
  );
}

export default NFTImage;
