import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Link from "next/link";
import styles from "./styles";

function HeaderItems() {
  return (
    <div className={styles.headerItems}>
      <Link
        href={`/collections/${process.env.NEXT_PUBLIC_NFT_DOODLES_COLLECTION}`}
      >
        <div className={styles.headerItem}>Collection</div>
      </Link>
      <div className={styles.headerItem}>Stats</div>
      <div className={styles.headerItem}>Resources</div>
      <div className={styles.headerItem}>Create</div>
      <div className={styles.headerIcon}>
        <CgProfile />
      </div>
      <div className={styles.headerIcon}>
        <MdOutlineAccountBalanceWallet />
      </div>
    </div>
  );
}

export default HeaderItems;
