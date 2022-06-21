import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Router from "next/router";
import styles from "./styles";
import EthLogo from "../../atoms/ethLogo";

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
