import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles";
import openseaLogo from "../../../assets/open-sea-logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import HeaderItems from "../../moleculs/HeaderItems";

function Navbar() {
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
      <HeaderItems />
    </div>
  );
}

export default Navbar;
