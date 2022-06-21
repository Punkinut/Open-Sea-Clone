import { ThirdwebSDK } from "@3rdweb/sdk";

const marketPlaceModuleSDK = (provider) => {
  if (!provider) return;

  const sdk = new ThirdwebSDK(
    provider.getSigner(),
    "https://eth-rinkeby.alchemyapi.io/v2/pPF9_Kp1JQRfPCWdvc606RKVVQXX9WcM"
  );

  return sdk.getMarketplaceModule("0x84E88B1C61b3594703f7Fb23B051F1D796639132");
};

export default marketPlaceModuleSDK;
