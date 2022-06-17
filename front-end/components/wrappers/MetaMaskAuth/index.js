import React from "react";
import Navbar from "../../organisms/Navbar";
import { useWeb3 } from "@3rdweb/hooks";
import styles from "./styles";
import { IoMdWallet } from "react-icons/io";

function MetaMaskAuth({ children }) {
  const { address, connectWallet } = useWeb3();
  return (
    <div className={styles.wrapper}>
      {address ? (
        <>
          <Navbar />
          {children}
        </>
      ) : (
        <div className={styles.walletConnectWrapper}>
          <div className={styles.semiWrapper}>
            <button
              className={styles.button}
              onClick={() => connectWallet("injected")}
            >
              Connect Wallet
              <IoMdWallet />
            </button>
            <div className={styles.details}>
              You need Chrome to be <br /> able to run this app
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MetaMaskAuth;
