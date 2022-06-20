import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useWeb3 } from "@3rdweb/hooks";
import { client } from "../../../lib/sanityClient";
import fetchCollectionData from "../../../utils/sanityApi/fetchCollectionData";
import nftModuleSDK from "../../../utils/thirdWebSDK/nftModule";
import marketPlaceModuleSDK from "../../../utils/thirdWebSDK/marketPlaceModule";
import loadingImage from "../../../utils/loadingImage";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import styles from "./styles";
import CollectionBanner from "../../atoms/collectionBanner";
import NFTCard from "../../molecules/NFTCard";

function CollectionTemplate() {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;

  const [nfts, setNfts] = useState([]);
  const [listings, setListings] = useState([]);
  const [collection, setCollection] = useState({});

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

      setNfts(nfts);
    })();
  }, [nftModule]);

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      const marketPlace = await marketPlaceModule.getAllListings();

      setListings(marketPlace);
    })();
  }, [marketPlaceModule]);

  useEffect(() => {
    (async () => {
      const collectionData = await fetchCollectionData(client, collectionId);
      setCollection(collectionData[0]);
    })();
  }, [collectionId]);

  return (
    <div className="overflow-hidden">
      <CollectionBanner image={collection?.bannerImageUrl} />
      <div className={styles.infoContainer}>
        <div className={styles.midRow}>
          <img
            className={styles.profileImg}
            src={loadingImage(collection?.imageUrl)}
            alt="profile image"
          />
        </div>
        <div className={styles.endRow}>
          <div className={styles.socialIconsContainer}>
            <div className={styles.socialIconsWrapper}>
              <div className={styles.socialIconsContent}>
                <div className={styles.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={styles.divider} />
                <div className={styles.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={styles.divider} />
                <div className={styles.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={styles.divider} />
                <div className={styles.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.midRow}>
          <div className={styles.title}>{collection.title}</div>
        </div>
        <div className={styles.midRow}>
          <div className={styles.createdBy}>
            Created by{" "}
            <span className="text-[#2081e2]">{collection.creator}</span>
          </div>
        </div>
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
        <div className={styles.midRow}>
          <div className={styles.description}>{collection.description}</div>
        </div>
        {/* <div className="flex flex-wrap">
          {nfts.map((nftItem, index) => (
            <NFTCard
              key={index}
              nftItem={nftItem}
              title={collection.title}
              listings={listings}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default CollectionTemplate;
