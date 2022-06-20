import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useWeb3 } from "@3rdweb/hooks";
import { client } from "../../../lib/sanityClient";
import { ThirdwebSDK } from "@3rdweb/sdk";
import fetchCollectionData from "../../../utils/sanityApi/fetchCollectionData";
import styles from "./styles";

function CollectionTemplate() {
  const router = useRouter();
  const { provider } = useWeb3;
  const { collectionId } = router.query;

  const [collection, setCollection] = useState({});
  const [nfts, setNfts] = useState([]);
  const [listings, setListings] = useState([]);

  const nftModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/pPF9_Kp1JQRfPCWdvc606RKVVQXX9WcM"
    );

    return sdk.getNFTModule(collectionId);
  }, [provider]);

  const marketPlaceModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://eth-rinkeby.alchemyapi.io/v2/pPF9_Kp1JQRfPCWdvc606RKVVQXX9WcM"
    );

    return sdk.getMarketplaceModule(
      "0x84E88B1C61b3594703f7Fb23B051F1D796639132"
    );
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
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  );
}

export default CollectionTemplate;
