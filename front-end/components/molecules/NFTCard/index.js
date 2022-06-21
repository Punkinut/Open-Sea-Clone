import { useEffect, useState } from "react";
import styles from "./styles";
import Link from "next/link";
import NftCollectionDetails from "../../atoms/nftCollectionDetails";

function NFTCard({ nftItem, title, listings }) {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);

  const nftLink = `/nfts/${nftItem.id}?isListed=${isListed}`;

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
      <NftCollectionDetails
        title={title}
        name={nftItem.name}
        isListed={isListed}
        price={price}
        likes={nftItem.likes}
        nftLink={nftLink}
      />
    </div>
  );
}

export default NFTCard;
