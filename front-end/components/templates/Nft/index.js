import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";
import { GlobalStore } from "../../../stores/GlobalStore/index.store";
import { observer } from "mobx-react-lite";

function NftTemplate() {
  const [store] = useState(() => new GlobalStore());

  useEffect(() => {
    store.loadState();
  }, [store]);

  const { state } = store;
  const { nfts, listings, collection } = state;

  return <div>NftTemplate</div>;
}

export default observer(NftTemplate);
