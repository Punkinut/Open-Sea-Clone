import React from "react";
import styles from "./styles";
import CollectionStat from "../../atoms/collectionStat";

function CollectionStats({ collection, nfts }) {
  return (
    <div className={styles.midRow}>
      <div className={styles.statsContainer}>
        <CollectionStat statValue={nfts?.length} statName={"items"} />
        <CollectionStat
          statValue={collection?.allOwners?.length}
          statName={"owners"}
        />
        <CollectionStat
          statValue={collection?.floorPrice}
          statName={"floor price"}
          ethLogo
        />
        <CollectionStat
          statValue={collection?.volumeTraded}
          statName={"volume traded"}
          ethLogo
        />
      </div>
    </div>
  );
}

export default CollectionStats;
