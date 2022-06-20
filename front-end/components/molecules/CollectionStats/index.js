import React from "react";
import styles from "./styles";

function CollectionStats({ collection, nfts }) {
  return (
    <div className={styles.midRow}>
      <div className={styles.statsContainer}>
        <div className={styles.collectionStat}>
          <div className={styles.statValue}>{nfts.length}</div>
          <div className={styles.statName}>items</div>
        </div>
        <div className={styles.collectionStat}>
          <div className={styles.statValue}>
            {collection?.allOwners?.length}
          </div>
          <div className={styles.statName}>owners</div>
        </div>
        <div className={styles.collectionStat}>
          <div className={styles.statValue}>
            <img
              className={styles.ethLogo}
              src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
            />
            {collection.floorPrice}
          </div>
          <div className={styles.statName}>floor price</div>
        </div>
        <div className={styles.collectionStat}>
          <div className={styles.statValue}>
            <img
              className={styles.ethLogo}
              src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
            />
            {collection.volumeTraded}.5k
          </div>
          <div className={styles.statName}>volume traded</div>
        </div>
      </div>
    </div>
  );
}

export default CollectionStats;
