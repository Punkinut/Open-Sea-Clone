import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useWeb3 } from "@3rdweb/hooks";
import { client } from "../../../lib/sanityClient";
import fetchCollectionData from "../../../utils/sanityApi/fetchCollectionData";
import nftModuleSDK from "../../../utils/thirdWebSDK/nftModule";
import marketPlaceModuleSDK from "../../../utils/thirdWebSDK/marketPlaceModule";
import styles from "./styles";
import CollectionBanner from "../../atoms/collectionBanner";
import CollectionProfilePicture from "../../atoms/collectionProfileImage";
import SocialMediaRow from "../../molecules/SocialMediaRow";
import CollectionStats from "../../molecules/CollectionStats";
import NFTCard from "../../molecules/NFTCard";
import LoadingSpinner from "../../atoms/loadingSpinner";
import { GlobalStore } from "../../../stores/GlobalStore/index.store";
import { observer } from "mobx-react-lite";

function CollectionTemplate() {
  const [store] = useState(() => new GlobalStore());
  const { state } = store;
  const { nfts, listings, collection } = state;

  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;

  const nftModule = useMemo(() => {
    return nftModuleSDK(provider, collectionId);
  }, [provider]);

  const marketPlaceModule = useMemo(() => {
    return marketPlaceModuleSDK(provider);
  }, [provider]);

  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts = await nftModule.getAll();

      store.setNfts(nfts);
    })();
  }, [nftModule]);

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      const marketPlace = await marketPlaceModule.getAllListings();

      store.setListings(marketPlace);
    })();
  }, [marketPlaceModule]);

  useEffect(() => {
    (async () => {
      const collectionData = await fetchCollectionData(client, collectionId);
      store.setCollection(collectionData[0]);
    })();
  }, [collectionId]);

  return (
    <div className="overflow-hidden">
      <CollectionBanner image={collection?.bannerImageUrl} />
      <div className={styles.infoContainer}>
        <CollectionProfilePicture image={collection?.imageUrl} />
        <SocialMediaRow />
        <div className={styles.midRow}>
          <div className={styles.title}>{collection.title}</div>
        </div>
        <div className={styles.midRow}>
          <div className={styles.createdBy}>
            Created by{" "}
            <span className="text-[#2081e2]">{collection.creator}</span>
          </div>
        </div>
        <CollectionStats collection={collection} nfts={nfts} />
        <div className={styles.midRow}>
          <div className={styles.description}>{collection.description}</div>
        </div>
        {nfts.length == 0 && <LoadingSpinner />}
        <div className="flex flex-wrap">
          {nfts?.map((nftItem, index) => (
            <NFTCard
              key={index}
              nftItem={nftItem}
              title={collection.title}
              listings={listings}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default observer(CollectionTemplate);
