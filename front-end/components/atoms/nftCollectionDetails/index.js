import React from "react";
import { BiHeart } from "react-icons/bi";
import EthLogo from "../../atoms/ethLogo";
import styles from "./styles";
import Link from "next/link";

function NftCollectionDetails({
  title,
  name,
  isListed,
  price,
  likes,
  nftLink,
}) {
  return (
    <div className={styles.details}>
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <Link href={nftLink}>
            <div className={styles.collectionName}>{title}</div>
          </Link>
          <Link href={nftLink}>
            <div className={styles.assetName}>{name}</div>
          </Link>
        </div>
        {isListed && (
          <div className={styles.infoRight}>
            <div className={styles.priceTag}>Price</div>
            <div className={styles.priceValue}>
              <EthLogo className={styles.ethLogo} />
              {price}
            </div>
          </div>
        )}
      </div>
      <div className={styles.likes}>
        <span className={styles.likeIcon}>
          <BiHeart />
        </span>{" "}
        {likes}
      </div>
    </div>
  );
}

export default NftCollectionDetails;
