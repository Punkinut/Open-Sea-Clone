import { ThirdwebSDK } from "@3rdweb/sdk";

const nftModuleSDK = (provider, collectionId) => {
  if (!provider) return;

  const sdk = new ThirdwebSDK(
    provider.getSigner(),
    "https://eth-rinkeby.alchemyapi.io/v2/pPF9_Kp1JQRfPCWdvc606RKVVQXX9WcM"
  );

  return sdk.getNFTModule(collectionId);
};

export default nftModuleSDK;
