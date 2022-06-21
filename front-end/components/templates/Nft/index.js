import { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";

function NftTemplate() {
  const { provider } = useWeb3();
  const [selectedNft, setSelectedNft] = useState();
  const router = useRouter();

  return <div>NftTemplate</div>;
}

export default NftTemplate;
