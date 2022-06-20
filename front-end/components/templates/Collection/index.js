import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles";
import { useWeb3 } from "@3rdweb/hooks";

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

  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts = await nftModule.getAll();

      setNfts(nfts);
    })();
  }, [nftModule]);

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
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAllListings());
    })();
  }, [marketPlaceModule]);

  // *[_type == "marketItems" && contractAddress == "0xa4a172FAC67BD11F4329366d1fb02e9da309b7aF" ] {
  //   "imageUrl": profileImage.asset->url,
  //   "bannerImageUrl": bannerImage.asset->url,
  //   volumeTraded,
  //   createdBy,
  //   contractAddress,
  //   "creator": createdBy->userName,
  //   title,
  //   floorPrice,
  //   "allOwners": owners[]->,
  //   description
  // }

  return (
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  );
}

export default CollectionTemplate;
