import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Router from "next/router";
import styles from "./styles";
import EthLogo from "../../atoms/ethLogo";
import Link from "next/link";

function NFTCard({ nftItem, title, listings }) {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);

  const nftLink = `/assets/${nftItem.id}?isListed=${isListed}`;

  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id);
    if (Boolean(listing)) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    }
  }, [listings, nftItem]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <Link href={nftLink}>
          <img
            src={nftItem.image}
            alt={nftItem.name}
            className={styles.nftImg}
          />
        </Link>
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            <Link href={nftLink}>
              <div className={styles.collectionName}>{title}</div>
            </Link>
            <Link href={nftLink}>
              <div className={styles.assetName}>{nftItem.name}</div>
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
          {nftItem.likes}
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
