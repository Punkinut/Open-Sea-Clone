import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { GiShare } from "react-icons/gi";
import styles from "./styles";

function NFTDetails({ selectedNft, collection }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <div className={styles.accent}>{collection?.title}</div>
        <div className={styles.nftTitle}>{selectedNft?.name}</div>
        <div className={styles.otherInfo}>
          <div className={styles.ownedBy}>
            Owned by <span className={styles.accent}>e88vault</span>
          </div>
          <div className={styles.likes}>
            <AiFillHeart className={styles.likeIcon} /> 2.3k
          </div>
        </div>
      </div>
      <div className={styles.actionButtonsContainer}>
        <div className={styles.actionButtons}>
          <div className={styles.actionButtonStart}>
            <MdRefresh />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.actionButton}>
            <RiShareBoxLine />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.actionButton}>
            <FiMoreVertical />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.actionButtonEnd}>
            <GiShare />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTDetails;
