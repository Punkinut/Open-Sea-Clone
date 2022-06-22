import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { GlobalStore } from "../../../stores/GlobalStore/index.store";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import NFTImage from "../../molecules/NFTImage";
import NFTDetails from "../../molecules/NFTDetails";
import styles from "./styles";

function NftTemplate() {
  const router = useRouter();
  const [store] = useState(() => new GlobalStore());

  useEffect(() => {
    store.loadState();
  }, [store]);

  const { state } = store;
  const nfts = toJS(state.nfts);
  const collection = toJS(state.collection);

  const selectedNft = () => {
    if (nfts.length !== 0) {
      return nfts.find((nft) => nft.id === router.query.nftId);
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.topContent}>
            <div className={styles.nftImgContainer}>
              <NFTImage selectedNft={selectedNft()} />
            </div>
            <div className={styles.detailsContainer}>
              <NFTDetails selectedNft={selectedNft()} collection={collection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(NftTemplate);
