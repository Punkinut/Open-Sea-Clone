import React from "react";
import styles from "./styles";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

function SocialMediaRow() {
  return (
    <div className={styles.endRow}>
      <div className={styles.socialIconsContainer}>
        <div className={styles.socialIconsWrapper}>
          <div className={styles.socialIconsContent}>
            <div className={styles.socialIcon}>
              <CgWebsite />
            </div>
            <div className={styles.divider} />
            <div className={styles.socialIcon}>
              <AiOutlineInstagram />
            </div>
            <div className={styles.divider} />
            <div className={styles.socialIcon}>
              <AiOutlineTwitter />
            </div>
            <div className={styles.divider} />
            <div className={styles.socialIcon}>
              <HiDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaRow;
