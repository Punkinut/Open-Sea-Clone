import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";
import { GlobalStore } from "../../../stores/GlobalStore/index.store";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

function NftTemplate() {
  const router = useRouter();
  const [store] = useState(() => new GlobalStore());

  useEffect(() => {
    store.loadState();
  }, [store]);

  const { state } = store;
  const nfts = toJS(state.nfts);

  const selectedNft = () => {
    if (nfts.length !== 0) {
      return nfts.filter((nft) => nft.id === router.query.nftId)[0];
    }
  };

  return <div>NftTemplate</div>;
}

export default observer(NftTemplate);
