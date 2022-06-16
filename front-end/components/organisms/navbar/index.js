import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles";
import openseaLogo from "../../../assets/open-sea-logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

function Navbar() {
  console.log(process.env);
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={openseaLogo} height={35} width={35} />
          <div className={styles.logoText}>OpenSea</div>
        </div>
      </Link>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
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
    </div>
  );
}

export default Navbar;
