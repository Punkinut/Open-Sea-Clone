import React, { useEffect } from "react";
import Navbar from "../../organisms/Navbar";
import Login from "../../templates/Login";
import { useWeb3 } from "@3rdweb/hooks";
import styles from "./styles";
import { client } from "../../../lib/sanityClient";
import welcomeUser from "../../../utils/welcomeUser";

function MetaMaskAuth({ children }) {
  const { address, connectWallet } = useWeb3();

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };
      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);
    })();
  }, [address]);

  return (
    <div className={styles.wrapper}>
      {address ? (
        <>
          <Navbar />
          {children}
        </>
      ) : (
        <Login connectWallet={connectWallet} />
      )}
    </div>
  );
}

export default MetaMaskAuth;
