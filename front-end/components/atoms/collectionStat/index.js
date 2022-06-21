import React from "react";
import styles from "./styles";

function CollectionStat({ statValue, statName, ethLogo = false }) {
  return (
    <div className={styles.collectionStat}>
      <div className={styles.statValue}>
        {ethLogo && (
          <img
            className={styles.ethLogo}
            alt="eth"
            src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
          />
        )}
        {statValue}
      </div>
      <div className={styles.statName}>{statName}</div>
    </div>
  );
}

export default CollectionStat;
