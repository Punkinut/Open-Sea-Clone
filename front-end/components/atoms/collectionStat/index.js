import React from "react";
import EthLogo from "../../atoms/ethLogo";
import styles from "./styles";

function CollectionStat({ statValue, statName, ethLogo = false }) {
  return (
    <div className={styles.collectionStat}>
      <div className={styles.statValue}>
        {ethLogo && <EthLogo className={styles.ethLogo} />}
        {statValue ? statValue : "..."}
      </div>
      <div className={styles.statName}>{statName}</div>
    </div>
  );
}

export default CollectionStat;
