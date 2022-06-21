import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";
import { GlobalStore } from "../../../stores/GlobalStore/index.store";
import { observer } from "mobx-react-lite";

function NftTemplate() {
  // const { provider } = useWeb3();
  // const [selectedNft, setSelectedNft] = useState();
  // const router = useRouter();

  // const [store] = useState(() => new GlobalStore());
  // const { state } = store;
  // const { nfts, listings, collection } = state;

  return <div>NftTemplate</div>;
}

export default observer(NftTemplate);
