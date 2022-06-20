import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useWeb3 } from "@3rdweb/hooks";
import { client } from "../../../lib/sanityClient";
import fetchCollectionData from "../../../utils/sanityApi/fetchCollectionData";
import nftModuleSDK from "../../../utils/thirdWebSDK/nftModule";
import marketPlaceModuleSDK from "../../../utils/thirdWebSDK/marketPlaceModule";
import styles from "./styles";

function CollectionTemplate() {
  const router = useRouter();
  const { provider } = useWeb3;
  const { collectionId } = router.query;

  const [nfts, setNfts] = useState([]);
  const [listings, setListings] = useState([]);
  const [collection, setCollection] = useState({});

  const nftModule = useMemo(() => {
    nftModuleSDK(provider);
  }, [provider]);

  const marketPlaceModule = useMemo(() => {
    marketPlaceModuleSDK(provider);
  }, [provider]);

  useEffect(() => {
    if (!nftModule) {
      console.log("NO NFT MODULE");
      return;
    }
    (async () => {
      const nfts = await nftModule.getAll();

      setNfts(nfts);
    })();
  }, [nftModule]);

  useEffect(() => {
    if (!marketPlaceModule) {
      console.log("NO MARKETPLACE MODULE");
      return;
    }
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
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  );
}

export default CollectionTemplate;
