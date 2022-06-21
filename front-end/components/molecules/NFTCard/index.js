import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Router from "next/router";
import styles from "./styles";

function NFTCard({ nftItem, title, listings }) {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);

  const nftOnClick = () => {
    Router.push({
      pathname: `/assets/${nftItem.id}`,
      query: { isListed: isListed },
    });
  };

  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id);
    if (Boolean(listing)) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    }
  }, [listings, nftItem]);

  return (
    <div className={styles.wrapper} onClick={nftOnClick}>
      <div className={styles.imgContainer}>
        <img src={nftItem.image} alt={nftItem.name} className={styles.nftImg} />
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            <div className={styles.collectionName}>{title}</div>
            <div className={styles.assetName}>{nftItem.name}</div>
          </div>
          {isListed && (
            <div className={styles.infoRight}>
              <div className={styles.priceTag}>Price</div>
              <div className={styles.priceValue}>
                <img
                  className={styles.ethLogo}
                  alt="eth"
                  src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                />
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
